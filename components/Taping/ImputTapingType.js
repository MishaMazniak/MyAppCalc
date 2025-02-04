import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { stylesTolTap } from "../../styles/stylesTolTap";
import { DataContext } from "../../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function ImputTapingType() {
  const { t, i18n } = useTranslation();
  const { setContextTaping } = useContext(DataContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("Metric(M)");

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const getInput = (el) => {
    if (el === "M") {
      setSelectOption("Metric(M)");
    } else setSelectOption("Pipe(G)");
    setIsAccordionOpen(false);
    setContextTaping((prevState) => ({
      ...prevState,
      type: el,
    }));
  };
  return (
    <>
      <View style={[stylesTolTap.wrapInput]}>
        <Text style={[styles.titleInput, stylesTolTap.text]}>
          {t("typeTap")}
        </Text>
        <TouchableOpacity
          onPress={() => toggleAccordion()}
          style={styles.boxAcordeon}
        >
          <Text style={[stylesTolTap.text]}>
            {selectOption === "Metric(M)" ? t("metric") : t("pipe")}
          </Text>
          <Text style={[stylesTolTap.arrowAcordeon, stylesTolTap.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen && (
        <View style={[stylesTolTap.dropBox, styles.dropBox]}>
          <TouchableOpacity
            onPress={() => {
              getInput("M");
            }}
          >
            <Text
              style={[
                styles.textBox,
                selectOption === "Metric(M)" ? stylesTolTap.select : NaN,
              ]}
            >
              {t("metric")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              getInput("G");
            }}
          >
            <Text
              style={[
                styles.textBox,
                selectOption === "Pipe(G)" ? stylesTolTap.select : NaN,
              ]}
            >
              {t("pipe")}
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
    width: "62%",
  },
  titleInput: {
    width: "32%",
    paddingLeft: 10,
    backgroundColor: "rgb(245, 241, 241)",
  },
  boxAcordeon: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around",
  },
  textBox: {
    fontSize: 24,
    paddingLeft: 5,
  },
});
