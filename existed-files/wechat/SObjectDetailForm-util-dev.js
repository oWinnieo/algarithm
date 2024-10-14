import TaroEnhancer from "common/enhancer/taro-enhancer";
import { sObjectUtil, translationUtil, ts, permissionsUtil } from "metadata-parsers/utils";
import { FORM_MODE, ICONS_CONSTANTS, PATHS_CONSTANTS, RECORD_TYPE_MASTER } from "common/constants";
import { OBJECT_KEYS } from "common/constants/object-keys";
import { formatSubmitResult } from "pages/app-pages/ui-renderring/SFDynamicLayout";
import SOBJECT_NAMES from "common/constants/sobject";
import { queryCrossObjectFields } from "utils/database/index";
import { FIELDS } from "pages/app-pages/components/GenericWorkFlow/constants";
import store from "store";
import { INSIGHT_UPDATED } from "utils/events/events-name";
import Taro from "@tarojs/taro";
import { dataUtil } from "utils/helpers";
import isEqual from "lodash/isEqual";
import { navigateToFn } from "utils/helpers/navigation-helper";
import { COMPONENT_MAP_KEY } from "pages/app-pages/ui-renderring/SFComponentsFactory/constants";
import workFlowPathDataController from "pages/app-pages/components/GenericWorkFlow/backend-service/workFlowPathDataController";
import { filterInitialValuesByLayoutName } from "pages/app-pages/ui-renderring/SFDynamicLayout/util";
import { updateSObject, createSObject } from "../../backend-service";

const regExp = {
  patternForCriteriaKey: /\{\!(Record).([^/]*)\}/g, // Only "Record" is supported currently.
  // for all types: /\{\!(Record|\$User|\$Permission|\$Client).([^/]*)\}/g
  regExpGetIndex: /\((\d+(\-\d+)*((AND(\d+(\-\d+)*))+|(OR(\d+(\-\d+)*))+))\)/g,
  regExpBracketsOnHeadAndTail: /(^\(|\)$)/g,
  // to recognize the format like: (1 AND 2)/(1 OR 2)/(1-2 AND 3)/(1 AND 2-3)/(1-2-3 AND 4-5)/...
};

export const getDefaultRecordType = (sObjectName) => {
  const { metadata } = store.getState();
  const recordTypeVisibilities = metadata.permissions.profile._recordTypeVisibilities;
  const currentObjectRecordTypes =
    sObjectName === "Account"
      ? recordTypeVisibilities?.filter(
          (item) =>
            (item.sobject === "Account" && item.visible === true) ||
            (item.sobject === "PersonAccount" && item.visible === true)
        )
      : recordTypeVisibilities?.filter((item) => item.sobject === sObjectName && item.visible === true) ?? [];
  const defaultRecordType =
    currentObjectRecordTypes.find((recordType) => recordType.isDefault === true)?.recordType ?? RECORD_TYPE_MASTER;
  return defaultRecordType;
};

export const _getPageLayout = ({ metadata, recordType, sObjectName }) => {
  const pageLayoutName = sObjectUtil.getPageLayoutName(sObjectName, recordType);
  return metadata?.ui.pageLayouts[pageLayoutName] || {};
};

export const _handleOperationSuccess = (closeForm, successCallback, formMode) => {
  TaroEnhancer.showToast({
    title: translationUtil.getLabelsValue("OCE__Global_SavedSuccessfully"),
    icon: ICONS_CONSTANTS.SUCCESS,
    duration: 2000,
  }).then(() => {
    switch (formMode) {
      case FORM_MODE.CREATE:
        closeForm();
        successCallback(null, null, null, null, true);
        break;
      case FORM_MODE.EDIT:
        closeForm();
        successCallback();
        break;
      default:
        break;
    }
  });
};

export const _prepareSubmitPayload = ({ data, values, formMode, initialVal, formLayout }) => {
  switch (formMode) {
    // When create new form data, initial values may include extra invalid field data
    // Will remove invalide data
    case FORM_MODE.CREATE:
      const result = filterInitialValuesByLayoutName({ ...values, ...initialVal }, formLayout?.fullName);
      return result;
    case FORM_MODE.EDIT:
      return { changedValues: values, originalValues: data };
    default:
      return { ...values };
  }
};
const { ID, OCE__OFFLINEUNIQUEID__C } = OBJECT_KEYS;
const EXCLUDED_KEYS = [ID, OCE__OFFLINEUNIQUEID__C];
export const _calculateChangedVals = (newVal = {}, originalVal = {}) => {
  const changedVals = {};
  changedVals[ID] = originalVal[ID];
  changedVals[OCE__OFFLINEUNIQUEID__C] = originalVal[OCE__OFFLINEUNIQUEID__C];
  /**
   * Here could be some new keys which only on newVal, so we need to go through the keys of newVal
   * instead of originalVal
   */
  Object.keys(newVal)
    .filter((key) => {
      return EXCLUDED_KEYS.indexOf(key) === -1;
    })
    .forEach((key) => {
      if ([].indexOf(key) === -1 && !isEqual(newVal[key], originalVal[key])) {
        changedVals[key] = newVal[key];
      }
    });
  return changedVals;
};

export const submitFunc = (values, formMode, sObjectName) => {
  switch (formMode) {
    case FORM_MODE.CREATE:
      return createSObject({ sObjectDetail: values, sObjectName });
    case FORM_MODE.EDIT:
      const { changedValues, originalValues } = values;
      const sObjectDetailChanged = _calculateChangedVals(changedValues, originalValues);
      return updateSObject({ sObjectDetailChanged, sObjectName });
    default:
      break;
  }
};
const _checkGWFChildObjectPermissions = async ({
  sObjectName,
  parentWinningContextID,
  parentContext,
  values,
  formMode,
  recordType,
}) => {
  let hasPermission = false;
  const gwfPermissions = await workFlowPathDataController.getWorkflowPathChildObjectPermissions({
    sObjectName,
    parentWinningContextID,
    parentContext,
    recordData: { ...values, RecordTypeId: recordType?.Id, RecordTypeId__lookup: recordType },
    formMode,
  });
  if (gwfPermissions?.error) {
    throw gwfPermissions?.error;
  }
  const { OCE__Create__c, OCE__Edit__c } = gwfPermissions || {};
  switch (formMode) {
    case FORM_MODE.EDIT:
      hasPermission = OCE__Edit__c;
      break;
    case FORM_MODE.CREATE:
      hasPermission = OCE__Create__c;
      break;
    default:
      break;
  }
  return hasPermission;
};
const _checkGWFPermissions = async ({ sObjectName, recordData, formMode, recordType }) => {
  let hasPermission = false;
  const permissions = await workFlowPathDataController.getWorkflowPathObjectPermissions({
    sObjectName,
    recordData: { ...recordData, RecordTypeId: recordType?.Id, RecordTypeId__lookup: recordType },
  });
  if (permissions?.error) {
    throw permissions?.error;
  }
  // If sObject does not has GWF check, then permissions would be null, which means GWF permission does not block following process
  if (!permissions) {
    hasPermission = true;
  } else {
    // @ts-ignore
    const { OCE__Edit__c, OCE__Create__c } = permissions;
    switch (formMode) {
      case FORM_MODE.EDIT:
        hasPermission = OCE__Edit__c;
        break;
      case FORM_MODE.CREATE:
        hasPermission = OCE__Create__c;
        break;
      default:
        break;
    }
  }
  return hasPermission;
};
export const generateSubmitFunc =
  ({
    submitFunc: _submitFunc,
    showErrorBanner,
    successCallback,
    closeCreateForm,
    formMode,
    data,
    initialVal,
    sObjectName,
    formLayout,
    parentWinningContextID,
    parentContext,
    recordTypeMap,
    defaultRecordTypeId,
  }) =>
  async (values) => {
    Taro.showLoading({ title: translationUtil.getLabelsValue("OCE__Loading"), mask: true });
    const selectedRecordTypeId = values?.RecordTypeId || defaultRecordTypeId;
    const selectedRecordType = Object.values(recordTypeMap)?.find(
      (recordType) => selectedRecordTypeId && recordType?.Id === selectedRecordTypeId
    );
    /**
     * https://jiraims.rm.imshealth.com/wiki/pages/viewpage.action?spaceKey=OD&title=28.+Enable+GWF+On+All+Detail+Tabs
     * Create sObjectDetail and childSObjectDetail GWF permission check
     */
    // Check GWFChildObjectPermissions when editing by GWFControlled with parentWinningContext.
    try {
      if (parentWinningContextID) {
        const hasGWFChildObjectPermission = await _checkGWFChildObjectPermissions({
          sObjectName,
          parentWinningContextID,
          parentContext,
          values,
          formMode,
          recordType: selectedRecordType,
        });

        if (!hasGWFChildObjectPermission) {
          const objectNameWithTranslation = translationUtil.getObjectsLabel(sObjectName);
          const recordTypeNameLabel = selectedRecordType?.Name;
          showErrorBanner(
            translationUtil.getLabelsValue("OCE__Workflows_SObjectCanNotBeCreated", [
              recordTypeNameLabel
                ? `${objectNameWithTranslation} - ${recordTypeNameLabel}`
                : `${objectNameWithTranslation}`,
            ])
          );
          Taro.hideLoading();
          return;
        }
      } else {
        // Check GWF Permissions
        //as an object should check parent level or child level only, but not check both,
        //as chlild object mergepermission  logic already cover by backend , this is redudent logic should add "else" branch logic,
        const hasGWFPermission = await _checkGWFPermissions({
          sObjectName,
          recordData: values,
          formMode,
          recordType: selectedRecordType,
        });
        if (!hasGWFPermission) {
          const objectNameWithTranslation = translationUtil.getObjectsLabel(sObjectName);
          const recordTypeNameLabel = selectedRecordType?.Name;
          showErrorBanner(
            translationUtil.getLabelsValue("OCE__Workflows_SObjectCanNotBeCreated", [
              recordTypeNameLabel
                ? `${objectNameWithTranslation} - ${recordTypeNameLabel}`
                : `${objectNameWithTranslation}`,
            ])
          );
          Taro.hideLoading();
          return;
        }
      }
    } catch (error) {
      showErrorBanner(error?.errMsg);
      Taro.hideLoading();
      return;
    }

    const _values = formatSubmitResult(formLayout, values);
    const payload = _prepareSubmitPayload({ data: data || {}, values: _values, formMode, initialVal, formLayout });
    const res = await _submitFunc(payload, formMode, sObjectName);
    Taro.hideLoading();
    if (res?.validationWarning) return res;
    if (res?.error) {
      showErrorBanner(res?.error?.errMsg);
      return;
    }
    const insightRelatedObjectNames = [
      SOBJECT_NAMES.INSIGHT,
      SOBJECT_NAMES.VOTE,
      SOBJECT_NAMES.INSIGHT_PRODUCT,
      SOBJECT_NAMES.INSIGHT_TOPIC,
    ];
    if (insightRelatedObjectNames.includes(sObjectName)) {
      Taro.eventCenter.trigger(INSIGHT_UPDATED);
    }
    if (formMode === FORM_MODE.CREATE) {
      const id = res?.data;
      navigateToFn({
        url: `${
          PATHS_CONSTANTS.BUSINESS_COMPONENTS.SOBJECT_DETAIL_PAGE2
        }?id=${id}&sObjectName=${sObjectName}&title=${ts.objectsLabel(sObjectName)}`,
      });
    }
    _handleOperationSuccess(closeCreateForm, successCallback, formMode);
  };

const getTabInstancelist = (targetFlexiPage) => {
  const targetRegion = targetFlexiPage?.flexiPageRegions?.find((i) => i.name === "main");
  const mainInstance = targetRegion?.itemInstances?.filter((i) => {
    return i?.componentInstance?.componentName === "flexipage:tabset";
  })?.[0];
  let tabsList = mainInstance.itemInstances?.map((i) => {
    return i?.componentInstance?.componentInstanceProperties?.find((j) => j.name === "title").value;
  });
  if (!tabsList) {
    tabsList = [];
  }
  const tabInstancelist =
    mainInstance?.itemInstances?.map((instance) => ({
      tabComponent: instance,
      tabType: "flexipage",
      loaded: false,
    })) || [];
  return tabInstancelist;
};

const calcFilterItem = ({ leftValue, rightValue, operator, isNumber }) => {
  const leftNumber = Number(leftValue) || 0;
  const rightNumber = Number(rightValue) || 0;

  switch (operator) {
    case "contains":
      return leftValue.includes(rightValue);
    case "equals":
    case "equal":
      return leftValue === rightValue;
    case "greaterorequal":
    case "greaterthanorequalto":
      return isNumber
        ? leftNumber >= rightNumber
        : leftValue?.toString()?.localeCompare(rightValue) || leftValue === rightValue;
    case "greaterthan":
      return isNumber ? leftNumber > rightNumber : leftValue?.toString()?.localeCompare(rightValue);
    case "lessorequal":
    case "lessthanorequalto":
      return isNumber
        ? leftNumber <= rightNumber
        : rightValue?.toString()?.localeCompare(leftValue) || rightValue === rightValue;
    case "lessthan":
      return isNumber ? leftNumber < rightNumber : rightValue?.toString()?.localeCompare(leftValue);
    case "notequal":
    case "ne":
      return isNumber ? leftNumber !== rightNumber : leftValue !== rightValue;
    case "startswith":
      return !leftValue ? false : leftValue.indexOf(rightValue) === 0;
    case "endswith":
      const splitArr = leftValue.split(rightValue);
      return !leftValue ? false : splitArr[splitArr.length - 1] === "";
    case "notcontain":
      return !leftValue.includes(rightValue);
    case "isnull":
      return leftValue === null;
    case "isnotnull":
      return leftValue !== null;
  }
};
/**
 * receive criteria arr: [1:true, 2:false, 3:true], booleanFilter: "1 AND 2 AND 3"
 * return res: {
   booleanFilter: '1-2-3',
   criteria: {
     1: true,
     2: false,
     3: true,
     1-2-3: false
   },
   booleanRes: false
}
 */
const calcBooleanValue = ({ criteriaResArr, type, booleanFilter }) => {
  const booleanFilterNoBrackets = booleanFilter.replace(regExp.regExpBracketsOnHeadAndTail, "");
  const keyStrArr = type === "AND" ? booleanFilterNoBrackets.split("AND") : booleanFilterNoBrackets.split("OR");
  const booleanArr = keyStrArr.map((key) => criteriaResArr[key]);
  const booleanRes =
    type === "AND"
      ? booleanArr.reduce((booleanA, booleanB) => booleanA && booleanB)
      : booleanArr.reduce((booleanA, booleanB) => booleanA || booleanB);
  const key = keyStrArr.join("-");
  return {
    booleanFilter: key,
    criteriaResArr: {
      ...criteriaResArr,
      [key]: booleanRes,
    },
    booleanRes,
  };
};

/**
 * recursion function for parse of booleanFilter like "((1 AND (2 OR 3 OR 4)) AND 5 AND (((6 OR 7) AND 8 AND 9) OR 10))"
 */
const parseRecursion = ({ booleanFilter, criteriaResArr }) => {
  if (!booleanFilter) {
    return;
  }
  if (!booleanFilter.includes("AND") && !booleanFilter.includes("OR")) {
    return booleanFilter;
  }
  if (!booleanFilter.includes("OR")) {
    return calcBooleanValue({ criteriaResArr: criteriaResArr, type: "AND", booleanFilter });
  }
  if (!booleanFilter.includes("AND")) {
    return calcBooleanValue({ criteriaResArr: criteriaResArr, type: "OR", booleanFilter });
  }
  const execRes = regExp.regExpGetIndex.exec(booleanFilter);
  if (execRes?.[1]) {
    const indexArr = execRes[1].includes("OR") ? execRes[1].split(/\s*OR\s*/) : execRes[1].split(/\s*AND\s*/);
    const resArr = {};
    indexArr.forEach((indexStr) => {
      resArr[indexStr] = criteriaResArr[indexStr];
    });
    const booleanRes = execRes[1].includes("OR")
      ? calcBooleanValue({ criteriaResArr: resArr, type: "OR", booleanFilter: execRes[1] })
      : calcBooleanValue({ criteriaResArr: resArr, type: "AND", booleanFilter: execRes[1] });
    booleanFilter = booleanFilter.replace(`(${execRes[1]})`, booleanRes.booleanFilter);
    criteriaResArr = {
      ...criteriaResArr,
      ...booleanRes.criteriaResArr,
    };
    regExp.regExpGetIndex.lastIndex = 0;
  }
  return parseRecursion({
    booleanFilter: booleanFilter,
    criteriaResArr: { ...criteriaResArr },
  });
};
const parseBooleanFilter = ({ booleanFilter, criteriaResArr }) => {
  const res = parseRecursion({
    booleanFilter,
    criteriaResArr,
  });
  return res.booleanRes;
};

/**
 * Get result (true or false) for each criteria item
 */
const getBooleanResForEachCriteriaItem = ({ inqObj, criteria, crossObjVal }) => {
  regExp.patternForCriteriaKey.lastIndex = 0;
  const execRes = regExp.patternForCriteriaKey.exec(criteria?.leftValue);
  let leftValue = "";
  const leftValueKey = execRes?.[2];
  if (execRes?.[2]) {
    leftValue =
      inqObj[leftValueKey] !== undefined && inqObj[leftValueKey] !== null
        ? inqObj[leftValueKey]
        : crossObjVal?.data?.records?.[0]?.[leftValueKey] || "";
  }
  const rightValue = criteria?.rightValue;

  const operator = criteria?.operator.toLowerCase();
  const isNumber = dataUtil.dataTypeCheck(leftValue) === "number";
  let leftValueNew;
  if (operator !== "isnull" && operator !== "isnotnull") {
    leftValueNew = leftValue === null ? "" : leftValue;
  }
  return calcFilterItem({
    leftValue: leftValueNew,
    rightValue,
    operator,
    isNumber,
  });
};

const getCriteriaResArr = ({ visibilityRule, inqObj, crossObjVal }) => {
  if (!visibilityRule || !visibilityRule.criteria) {
    return;
  }
  const criteriaResArr = {};
  visibilityRule?.criteria?.forEach((criteria, index) => {
    const indexStr = (index + 1).toString();
    const res = getBooleanResForEachCriteriaItem({
      inqObj,
      criteria,
      crossObjVal,
    });
    criteriaResArr[indexStr] = res;
  });
  return criteriaResArr;
};

const parseVisibilityRule = ({ inqObj, visibilityRule, crossObjVal }) => {
  if (!visibilityRule) {
    return;
  }
  if (dataUtil.dataTypeCheck(visibilityRule.criteria) === "object") {
    const res = getBooleanResForEachCriteriaItem({
      inqObj,
      criteria: visibilityRule.criteria,
      crossObjVal,
    });
    return res;
  }
  const criteriaResArr = getCriteriaResArr({
    visibilityRule,
    inqObj,
    crossObjVal,
  });
  return parseBooleanFilter({
    booleanFilter: visibilityRule?.booleanFilter.replace(/[\s]/g, ""),
    criteriaResArr,
  });
};

const getFieldsFromSObject = ({ sObjectName, fieldsForSObject, fieldsArr, typeOfPermission, crossObjVal, inqObj }) => {
  const resArr = [];
  fieldsArr.forEach((field) => {
    const fieldName = field.fieldInstance.fieldItem.split(".")[1];
    const permissionObj = permissionsUtil.getFieldPermission(sObjectName, fieldName)[fieldName];
    if (!permissionObj || !permissionObj.readable) {
      return;
    }
    const permission = permissionObj[typeOfPermission];
    if (permission || (!permission && typeOfPermission === "editable")) {
      const visibilityRuleParsed = true;
      /* criteria checking *
      if (field?.fieldInstance?.visibilityRule) {
        visibilityRuleParsed = parseVisibilityRule({
          inqObj,
          visibilityRule: field?.fieldInstance?.visibilityRule,
          crossObjVal,
        });
      }
      /* /criteria checking */
      if (visibilityRuleParsed) {
        resArr.push({
          ...fieldsForSObject[fieldName],
          behavior:
            !permission && typeOfPermission === "editable"
              ? "Readonly"
              : field?.fieldInstance?.fieldInstanceProperties?.find(
                  (fieldInstance) => fieldInstance?.name === "uiBehavior"
                ).value,
        });
      }
    }
  });
  return resArr;
};

/**
 * get all leftKeys (from criteria), for cross object value getting on next step.
 * one criteria is like : {
     leftValue: "{!Record.OCE__AccountName__c}"
     operator: "CONTAINS"
     rightValue: "ABC"
 }
 */
const getAllLeftKeys = ({ fieldInstance }) => {
  const leftKeyArr = [];
  const visibilityRule = fieldInstance?.visibilityRule;
  if (!visibilityRule) {
    return;
  }
  if (visibilityRule?.booleanFilter) {
    visibilityRule?.criteria?.forEach((criteria) => {
      if (criteria.leftValue) {
        regExp.patternForCriteriaKey.lastIndex = 0;
        const execRes = regExp.patternForCriteriaKey.exec(criteria.leftValue);
        if (execRes?.[2]) {
          leftKeyArr.push(execRes?.[2]);
        }
      }
    });
  } else {
    if (visibilityRule?.criteria.leftValue) {
      regExp.patternForCriteriaKey.lastIndex = 0;
      const execRes = regExp.patternForCriteriaKey.exec(visibilityRule?.criteria.leftValue);
      if (execRes?.[2]) {
        leftKeyArr.push(execRes?.[2]);
      }
    }
  }
  return leftKeyArr;
};

const getCrossObjectValue = async ({ sObjectName, objectId, leftKeyArr }) => {
  if (!leftKeyArr || leftKeyArr.length === 0) {
    return;
  }
  const { application } = store.getState();
  const _ = application?.dbHandler?.command;

  const res = await queryCrossObjectFields(sObjectName, leftKeyArr, {
    filter: _.or([{ [FIELDS.COMMOMFIELDS.ID]: objectId }, { [FIELDS.COMMOMFIELDS.OFFLINEID]: objectId }]),
  });
  return res;
};

/**
 * This is for layout preparation of view page.
 * @param {*} itemInstances: Object
 * @param {*} sObjectName: String
 * @param {*} objectId: String
 * @param {*} data: Object
 */
export const prepareFieldSetObjs = ({ itemInstances, sObjectName, inqObj }) => {
  const fieldsForSObject = sObjectUtil.getSobjectData(sObjectName)?.fields;
  let fieldsArr = [];
  itemInstances.forEach((item) => {
    fieldsArr = [...fieldsArr, ...item.itemInstances];
  });
  let leftKeyArr = [];
  itemInstances?.forEach((item1) => {
    item1?.itemInstances?.forEach((item2) => {
      if (item2?.fieldInstance) {
        const res = getAllLeftKeys({ fieldInstance: item2?.fieldInstance });
        if (res) {
          leftKeyArr = [...leftKeyArr, ...res];
        }
      }
    });
  });
  let crossObjVal;
  /* criteria *
  if (leftKeyArr?.length > 0) {
    crossObjVal = await getCrossObjectValue({
      sObjectName,
      objectId,
      leftKeyArr: Array.from(new Set(leftKeyArr)),
    });
  }
  /* /criteria */
  const resArr = getFieldsFromSObject({
    sObjectName,
    fieldsForSObject,
    fieldsArr,
    typeOfPermission: "readable",
    crossObjVal,
    inqObj,
  });
  return {
    displayedFields: resArr,
  };
};

const setItemInstancesHasFieldSection = (tabInstancelist) => {
  const res = {};
  tabInstancelist
    .filter(
      (instance) =>
        instance?.tabComponent?.componentInstance?.componentName === COMPONENT_MAP_KEY.FLEXIPAGE_TAB &&
        !!instance?.tabComponent?.itemInstances.find(
          (instance2) => instance2?.componentInstance?.componentName === COMPONENT_MAP_KEY.FLEXIPAGE_FIELD_SECTION
        )
    )
    ?.forEach((fieldSectionTab) => {
      fieldSectionTab?.tabComponent?.itemInstances?.forEach((item) => {
        if (item?.componentInstance?.componentName === COMPONENT_MAP_KEY.FLEXIPAGE_FIELD_SECTION) {
          let layoutArr = [];
          item?.itemInstances?.forEach((itemInstance) => {
            if (itemInstance?.componentInstance?.componentName === COMPONENT_MAP_KEY.FLEXIPAGE_COLUMN) {
              layoutArr = [...layoutArr, ...itemInstance?.itemInstances];
            }
          });
          const fieldSectionLabel = item?.componentInstance?.componentInstanceProperties?.find(
            (property) => property?.name === "label"
          )?.value;
          const fieldSectionId = item?.componentInstance?.identifier;
          const labelTranslation = ts.labelsValue(fieldSectionLabel) || fieldSectionLabel;
          res[fieldSectionId] = {
            labelTranslation,
            layoutArr,
          };
        }
      });
    });
  return res;
};
const setCrossObjVal = async ({ sObjectName, objectId, leftKeyArr, itemInstancesHasFieldSection }) => {
  let leftKeyArrNew = [];
  let leftKeyArrNoDup = [];
  let crossObjValNew;
  if (!leftKeyArr) {
    Object.keys(itemInstancesHasFieldSection)?.forEach((key) => {
      if (itemInstancesHasFieldSection[key]) {
        itemInstancesHasFieldSection[key]?.layoutArr?.forEach((layout) => {
          if (layout?.fieldInstance) {
            const res = getAllLeftKeys({ fieldInstance: layout.fieldInstance });
            if (res) {
              leftKeyArrNew = [...leftKeyArrNew, ...res];
            }
          }
        });
      }
    });
    leftKeyArrNoDup = Array.from(new Set(leftKeyArrNew));
    if (leftKeyArrNoDup?.length > 0) {
      crossObjValNew = await getCrossObjectValue({
        sObjectName,
        objectId,
        leftKeyArr: leftKeyArrNoDup,
      });
    }
  }
  return {
    leftKeyArrNoDup,
    crossObjValNew,
  };
};

let leftKeyArrPrev;
let crossObjValPrev;

/**
 * get FieldSections components from all tabInstance got from metadata
 * @param {*} sObjectName: String
 * @param {*} recordType: String
 * @param {*} metadata: Object
 * @param {*} objectId: String
 * @param {*} data: Object
 * @param {*} leftKeyArr: Array
 * @param {*} crossObjVal: Object
 * @returns
 */

export const getFieldSectionsLayoutFromFlexipage = ({ sObjectName, recordType, metadata, inqObj = null }) => {
  const fieldsForSObject = sObjectUtil.getSobjectData(sObjectName)?.fields;
  leftKeyArrPrev = leftKeyArrPrev || null;
  crossObjValPrev = crossObjValPrev || null;

  //Todo: compose fieldSectionsLayout for form
  const targetRecordType = metadata?.sObjects?.[sObjectName]?.recordTypes?.find((i) => i.fullName === recordType);
  let targetFlexiPage = {};
  let itemInstancesHasFieldSection;
  if (targetRecordType?.flexiPage) {
    targetFlexiPage = metadata?.ui?.flexiPages[targetRecordType.flexiPage];
  } else {
    return {
      res: null,
    };
  }
  if (targetFlexiPage) {
    const tabInstancelist = getTabInstancelist(targetFlexiPage);

    /**
     * To filter out the instances that contains fieldSection
     */
    itemInstancesHasFieldSection = setItemInstancesHasFieldSection(tabInstancelist);
    /* for criteria crossObject value *
    if (!leftKeyArrPrev) {
      const { leftKeyArrNoDup, crossObjValNew } = await setCrossObjVal({
        sObjectName,
        objectId,
        leftKeyArr: leftKeyArrPrev,
        itemInstancesHasFieldSection,
      });
      crossObjValPrev = crossObjValNew;
      leftKeyArrPrev = leftKeyArrNoDup;
    }
    /* /for criteria crossObject value */
    const res = Object.keys(itemInstancesHasFieldSection).map((key) => {
      if (!key) {
        return;
      }
      const resArr = getFieldsFromSObject({
        sObjectName,
        fieldsForSObject,
        fieldsArr: itemInstancesHasFieldSection?.[key]?.layoutArr,
        typeOfPermission: "editable",
        crossObjVal: crossObjValPrev || null,
        inqObj,
      });
      const resItem = {
        customLabel: true,
        detailHeading: true,
        editHeading: true,
        label: itemInstancesHasFieldSection?.[key]?.labelTranslation,
        layoutColumns: [{ layoutItems: resArr }],
        style: "TwoColumnsTopToBottom",
      };
      return resItem;
    });
    return {
      res: res?.length > 0 ? res : null,
    };
  }
  return {
    res: null,
  };
};
