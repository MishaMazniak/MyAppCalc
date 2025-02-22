import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { stylesTolTap } from "../../styles/stylesTolTap";
import { DataContext } from "../../ContextAPI/DataContext";

export default function ImputTapingSize() {
  const { t, i18n } = useTranslation();
  const { setContextTaping } = useContext(DataContext);
  const { contextTaping } = useContext(DataContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("1");
  const [selectList, setSelectList] = useState();

  const sizeMetrikScrews = [
    "1",
    "1.2",
    "1.4",
    "1.6",
    "1.8",
    "2",
    "2.2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "24",
    "27",
    "30",
    "33",
    "36",
    "39",
    "42",
    "45",
    "48",
    "52",
    "56",
    "60",
    "64",
    "68",
  ];

  const sizeShaftScrews = [
    "1/16",
    "1/8",
    "1/4",
    "3/8",
    "1/2",
    "5/8",
    "3/4",
    "7/8",
    "1",
    "1_1/8",
    "1_1/4",
    "1_3/8",
    "1_1/2",
    "1_5/8",
    "1_3/4",
    "2",
    "2_1/4",
    "2_3/8",
    "2_1/2",
    "2_3/4",
    "3",
    "3_1/4",
    "3_1/2",
    "3_3/4",
  ];

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const getInput = (el) => {
    setSelectOption(el);
    setIsAccordionOpen(false);
    setContextTaping((prevState) => ({
      ...prevState,
      size: el,
    }));
  };
  useEffect(() => {
    if (contextTaping.type === "M") {
      setSelectList(sizeMetrikScrews);
      getInput("1");
    } else {
      setSelectList(sizeShaftScrews);
      getInput("1/16");
    }
  }, [contextTaping.type]);
  return (
    <>
      <View style={[stylesTolTap.wrapInput]}>
        <Text style={[styles.titleInput, stylesTolTap.text]}>
          {t("sizeTap")}
        </Text>
        <TouchableOpacity
          onPress={() => toggleAccordion()}
          style={styles.boxAcordeon}
        >
          <Text style={stylesTolTap.text}>{selectOption}</Text>
          <Text style={[stylesTolTap.arrowAcordeon, stylesTolTap.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen && (
        <View style={[stylesTolTap.dropBox, styles.dropBox]}>
          <ScrollView
            style={styles.scrollView}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
          >
            {selectList.map((option, index) => (
              <TouchableOpacity onPress={() => getInput(option)} key={index}>
                <Text
                  style={[
                    stylesTolTap.textBox,
                    selectOption === option ? stylesTolTap.select : NaN,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 400,
  },
  dropBox: {
    top: 120,
    zIndex: 10,
    width: "60%",
    maxHeight: "100%",
  },
  boxAcordeon: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around",
  },
  test: {
    width: "41%",
  },
  textBox: {
    fontSize: 24,
    paddingLeft: 5,
  },
  titleInput: {
    width: "34%",
    paddingLeft: 10,
    backgroundColor: "rgb(245, 241, 241)",
  },
});
