import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { stylesTol } from "../../styles/styleTolerance";
import { DataContext } from "../../ContextAPI/DataContext";

export default function ImputTapingType() {
  const { setContextTaping } = useContext(DataContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("M");

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const getInput = (el) => {
    setSelectOption(el);
    setIsAccordionOpen(false);
    setContextTaping((prevState) => ({
      ...prevState,
      type: el,
    }));
  };
  return (
    <>
      <View style={[stylesTol.wrapInput]}>
        <Text style={[stylesTol.titleInput, styles.titleInput, stylesTol.text]}>
          Type:
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
          <TouchableOpacity
            onPress={() => {
              getInput("M");
            }}
          >
            <Text
              style={[
                styles.textBox,
                selectOption === "M" ? stylesTol.select : NaN,
              ]}
            >
              Metric(M)
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
                selectOption === "G" ? stylesTol.select : NaN,
              ]}
            >
              Pipe (G)
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
