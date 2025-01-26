import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { stylesTol } from "../../styles/styleTolerance";

export default function ImputHoleShaft({ getDataInput }) {
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
      <View style={[stylesTol.wrapInput]}>
        <Text style={[stylesTol.titleInput, stylesTol.text]}>Hole/Shaft:</Text>
        <TouchableOpacity
          onPress={() => toggleAccordion()}
          style={stylesTol.boxAcordeon}
        >
          <Text style={[stylesTol.chooseOpcion, stylesTol.text]}>
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
              getInput("holeShaft", "Hole");
            }}
          >
            <Text
              style={[
                stylesTol.textBox,
                selectOption === "Hole" ? stylesTol.select : NaN,
              ]}
            >
              Hole
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              getInput("holeShaft", "Shaft");
            }}
          >
            <Text
              style={[
                stylesTol.textBox,
                selectOption === "Shaft" ? stylesTol.select : NaN,
              ]}
            >
              Shaft
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
  },
});
