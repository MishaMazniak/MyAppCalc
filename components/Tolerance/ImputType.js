import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import { stylesTol } from "../../styles/styleTolerance";

export default function ImputType({ getDataInput }) {
  const { contextTolerance } = useContext(DataContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("H");
  const [selectList, setSelectList] = useState();
  // symbol for holes
  const holeOptions = [
    "H",
    "K",
    "J",
    "G",
    "M",
    "N",
    "R",
    "S",
    "E",
    "F",
    "U",
    "D",
    "A",
    "B",
  ];
  // symbol for shaft
  const shaftOptions = [
    "h",
    "k",
    "j",
    "g",
    "m",
    "n",
    "r",
    "s",
    "e",
    "f",
    "u",
    "d",
    "a",
    "b",
    "p",
  ];
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const getInput = (key, el) => {
    setSelectOption(el);
    getDataInput(key, el);
    setIsAccordionOpen(false);
  };
  useEffect(() => {
    if (contextTolerance.holeShaft === "Hole") {
      setSelectList(holeOptions);
      getInput("type", "H");
    } else {
      setSelectList(shaftOptions);
      getInput("type", "h");
    }
  }, [contextTolerance.holeShaft]);

  return (
    <>
      <View style={[stylesTol.wrapInput]}>
        <Text style={[stylesTol.titleInput, stylesTol.text]}>Type:</Text>
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
          {selectList.map((option, index) => (
            <TouchableOpacity
              onPress={() => getInput("type", option)}
              key={index}
            >
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
    top: 180,
    zIndex: 10,
  },
});
