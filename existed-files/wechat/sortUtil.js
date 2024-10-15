import { dataUtil } from "utils/helpers";
import FIELD_TYPES from "common/constants/field-types";

const _compareNumber = (valA, valB, _orderType) => {
  return _orderType === "asc" ? valA - valB : valB - valA;
};

const _compareString = (valA, valB, _orderType) => {
  // two undefined values should be treated as equal ( 0 )
  if (valA === undefined && valB === undefined) {
    return 0;
    // if a is undefined and b isn't a should have a lower index in the array
  } else if (valA === undefined) {
    return 1;
    // if b is undefined and a isn't a should have a higher index in the array
  } else if (valB === undefined) {
    return -1;
  }
  return _orderType === "asc" ? valA?.localeCompare(valB) : valB?.localeCompare(valA);
};

const sortUtil = {
  specialValueCompare: (_sortConfig) => {
    if (!_sortConfig) return;
    const orderType = _sortConfig.order.toLowerCase();
    const setTimeValue = (_item) => {
      return (
        _item?.displayContent?.find((_i) => _i?.fullName === _sortConfig?.name)?.timeValue ||
        new Date(_item[_sortConfig.name]).getTime() ||
        0
      );
    };
    const setNormalValue = (_item) => {
      return (
        _item?.displayContent?.find((_i) => _i?.fullName === _sortConfig?.name)?.fieldValue || _item[_sortConfig.name]
      );
    };
    const formatValue = (a, b) => {
      let valA;
      let valB;
      switch (_sortConfig?.dataType?.toLowerCase()) {
        case FIELD_TYPES.DATETIME:
          valA = setTimeValue(a);
          valB = setTimeValue(b);
          break;
        case FIELD_TYPES.NUMBER:
          valA = Number(setNormalValue(a));
          valB = Number(setNormalValue(b));
          break;
        default:
          valA = setNormalValue(a);
          valB = setNormalValue(b);
          break;
      }
      return { valA, valB };
    };

    return (a, b) => {
      const { valA, valB } = formatValue(a, b);
      const isNumber = dataUtil.dataTypeCheck(valA) === "number";

      switch (_sortConfig.dataType?.toLowerCase()) {
        case FIELD_TYPES.AUTONUMBER:
          if (isNumber) {
            return _compareNumber(valA, valB, orderType);
          }
          return _compareString(valA, valB, orderType);

        case FIELD_TYPES.TEXT:
        case FIELD_TYPES.LOOKUP:
        case FIELD_TYPES.REFERENCE:
        case FIELD_TYPES.LONGTEXTAREA:
          // Convert null/empty string into undefined to get correct sorting
          // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
          const prevValue = valA ?? undefined;
          const nextValue = valB ?? undefined;
          return _compareString(prevValue, nextValue, orderType);
        default:
          if (isNumber) {
            return _compareNumber(valA, valB, orderType);
          }
          return _compareString(valA?.toString(), valB?.toString(), orderType);
      }
    };
  },
};

export default sortUtil;
