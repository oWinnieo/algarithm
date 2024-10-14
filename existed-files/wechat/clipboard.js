import Taro from "@tarojs/taro";
import i18n from "i18n/i18n";
import { ts } from "metadata-parsers/utils";
import { View } from "@tarojs/components";
import store from "store";
import { openModal, CLOSE_MODAL } from "store/modal/modalReducer";

const openModalFn = (_modalInfo) => store.dispatch(openModal(_modalInfo));
const closeModalFn = () => store.dispatch({ type: CLOSE_MODAL });

const handleClickCopy = (urlStr) => {
  if (!Boolean(urlStr)) return;
  Taro.setClipboardData({
    data: urlStr,
    success: () => {
      Taro.showToast({
        title: ts.labelsValue("RCMLinkCopiedMessage"),
        icon: "none",
        // https://jiraims.rm.imshealth.com/browse/OCE-154968
        // In order to make the word can be shown complete, set the icon none.
        duration: 2000,
      });
    },
  });
};

const openClickboard = ({ value, _openModal = openModalFn, _closeModal = closeModalFn }) => {
  if (!value) return;
  _openModal({
    content: (
      <>
        <View>{i18n.t._("CopyAndPasteExternalLink")}</View>
        <View
          onLongPress={() => {
            handleClickCopy && handleClickCopy(value);
            _closeModal();
          }}
        >
          {value}
        </View>
      </>
    ),
    onClose: () => undefined,
    actions: [
      {
        label: ts.labelsValue("Cancel"),
        onClick: () => undefined,
      },
      {
        label: ts.labelsValue("Order_Copy"),
        variant: "blue",
        onClick: () => {
          handleClickCopy && handleClickCopy(value);
        },
      },
    ],
  });
};

export { openClickboard, handleClickCopy };
