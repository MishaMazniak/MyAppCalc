import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { stylesTolTap } from "../../styles/stylesTolTap";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function ImputHoleShaft({ getDataInput }) {
  const { t, i18n } = useTranslation();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("Hole");

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const getInput = (key, el) => {
    setSelectOption(el);
    getDataInput(key, el);
    setIsAccordionOpen(false);
  };
  return (
    <>
      <View style={[stylesTolTap.wrapInput]}>
        <Text style={[stylesTolTap.titleInput, stylesTolTap.text]}>
          {t("holeShaft")}
        </Text>
        <TouchableOpacity
          onPress={() => toggleAccordion()}
          style={stylesTolTap.boxAcordeon}
        >
          <Text style={[stylesTolTap.chooseHoleShaft, stylesTolTap.text]}>
            {selectOption === "Hole" ? t("hole") : t("shaft")}
          </Text>
          <Text style={[stylesTolTap.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen && (
        <View style={[stylesTolTap.dropBox, styles.dropBox]}>
          <TouchableOpacity
            onPress={() => {
              getInput("holeShaft", "Hole");
            }}
          >
            <Text
              style={[
                stylesTolTap.textBox,
                selectOption === "Hole" ? stylesTolTap.select : NaN,
              ]}
            >
              {t("hole")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              getInput("holeShaft", "Shaft");
            }}
          >
            <Text
              style={[
                stylesTolTap.textBox,
                selectOption === "Shaft" ? stylesTolTap.select : NaN,
              ]}
            >
              {t("shaft")}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  dropBox: {
    top: 65,
    zIndex: 10,
  },
});
