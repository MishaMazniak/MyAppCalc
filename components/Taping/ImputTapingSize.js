import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { stylesTol } from "../../styles/styleTolerance";
import { DataContext } from "../../ContextAPI/DataContext";

export default function ImputTapingSize() {
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
    "4",
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
      <View style={[stylesTol.wrapInput]}>
        <Text style={[stylesTol.titleInput, styles.titleInput, stylesTol.text]}>
          Size:
        </Text>
        <TouchableOpacity
          onPress={() => toggleAccordion()}
          style={styles.boxAcordeon}
        >
          <Text style={[stylesTol.text, styles.test]}>{selectOption}</Text>
          <Text style={[stylesTol.arrowAcordeon, stylesTol.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen && (
        <View style={[stylesTol.dropBox, styles.dropBox]}>
          {selectList.map((option, index) => (
            <TouchableOpacity onPress={() => getInput(option)} key={index}>
              <Text
                style={[
                  stylesTol.textBox,
                  selectOption === option ? stylesTol.select : NaN,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  dropBox: {
    top: 65,
    zIndex: 10,
    width: "67%",
  },
  titleInput: {
    width: 102,
  },
  boxAcordeon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  test: {
    width: "41%",
  },
  textBox: {
    fontSize: 24,
    paddingLeft: 5,
  },
});
