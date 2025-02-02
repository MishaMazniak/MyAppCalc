import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import { stylesTolTap } from "../../styles/stylesTolTap";

export default function ImputTolerance({ getDataInput }) {
  const { contextTolerance } = useContext(DataContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectOption, setSelectOption] = useState();
  const [selectList, setSelectList] = useState([]);

  const toleranceMap = {
    H: ["6", "7", "8", "9", "10", "11", "12"],
    G: ["6", "7"],
    N: ["6", "7"],
    J: ["6", "7", "8"],
    K: ["6", "7", "8"],
    M: ["6"],
    S: ["7"],
    R: ["7"],
    U: ["8"],
    E: ["8"],
    F: ["8", "9"],
    D: ["9", "10", "11"],
    A: ["11"],
    B: ["11", "12"],
    h: ["5", "6", "7", "8", "9", "10", "11"],
    g: ["5", "6"],
    k: ["5", "6", "7"],
    m: ["5"],
    j: ["6", "7"],
    n: ["6", "7"],
    r: ["6"],
    p: ["6"],
    f: ["7", "9"],
    s: ["7"],
    e: ["8"],
    u: ["7", "8"],
    d: ["9", "10", "11"],
    a: ["11"],
    b: ["11"],
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const getInput = (key, el) => {
    setSelectOption(el);
    setIsAccordionOpen(false);
    getDataInput(key, el);
  };
  useEffect(() => {
    if (toleranceMap[contextTolerance.type]) {
      setSelectList(toleranceMap[contextTolerance.type]);
      getInput("tolerance", toleranceMap[contextTolerance.type][0]);
    } else {
      setSelectList([]);
    }
  }, [contextTolerance.type]);
  return (
    <>
      <View style={[stylesTolTap.wrapInput]}>
        <Text style={[stylesTolTap.titleInput, stylesTolTap.text]}>
          Tolerance:
        </Text>
        <TouchableOpacity
          onPress={() => toggleAccordion()}
          style={stylesTolTap.boxAcordeon}
        >
          <Text style={[stylesTolTap.chooseOpcion, stylesTolTap.text]}>
            {selectOption}
          </Text>
          <Text style={[stylesTolTap.arrowAcordeon, stylesTolTap.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen && (
        <View style={[stylesTolTap.dropBox, styles.dropBox]}>
          {selectList.map((option, index) => (
            <TouchableOpacity
              onPress={() => getInput("tolerance", option)}
              key={index}
            >
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
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  dropBox: {
    top: 237,
    zIndex: 10,
  },
});
