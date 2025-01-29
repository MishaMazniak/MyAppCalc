import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { stylesTol } from "../../styles/styleTolerance";
import { DataContext } from "../../ContextAPI/DataContext";

export default function ImputTapingType() {
  const { setContextTaping } = useContext(DataContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("Metric(M)");

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
          style={stylesTol.boxAcordeon}
        >
          <Text
            style={[
              stylesTol.chooseHoleShaft,
              styles.typeSelect,
              stylesTol.text,
            ]}
          >
            {selectOption}
          </Text>
          <Text style={[stylesTol.arrowAcordeon, stylesTol.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen && (
        <View style={[stylesTol.dropBox, styles.dropBox]}>
          <TouchableOpacity
            onPress={() => {
              getInput("Metric(M)");
            }}
          >
            <Text
              style={[
                stylesTol.textBox,
                selectOption === "Metric(M)" ? stylesTol.select : NaN,
              ]}
            >
              Metric(M)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              getInput("Pipe (G)");
            }}
          >
            <Text
              style={[
                stylesTol.textBox,
                selectOption === "Pipe (G)" ? stylesTol.select : NaN,
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
  typeSelect: {
    marginLeft: 15,
  },
});
