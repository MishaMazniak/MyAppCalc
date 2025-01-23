import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { gStyle } from "../styles/styles";

export default function Tolerance() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [dataInput, setDataInput] = useState({
    type: "Hole",
  });
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const getDataInput = (name, value) => {
    setDataInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    toggleAccordion();
  };

  return (
    <SafeAreaView style={gStyle.main}>
      <View style={styles.inputGroup}>
        <Text style={[styles.titleInput, styles.text]}>Hole/Shaft:</Text>
        <TouchableOpacity onPress={toggleAccordion} style={styles.boxAcordeon}>
          <Text style={[styles.chooseOpcion, styles.text]}>
            {dataInput.type}
          </Text>
          <Text style={[styles.arrowAcordeon, styles.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen && (
        <View style={styles.dropBox}>
          <TouchableOpacity onPress={() => getDataInput("type", "Hole")}>
            <Text
              style={[
                styles.textBox,
                dataInput.type === "Hole" ? styles.select : NaN,
              ]}
            >
              Hole
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getDataInput("type", "Shaft")}>
            <Text
              style={[
                styles.textBox,
                dataInput.type === "Shaft" ? styles.select : NaN,
              ]}
            >
              Shaft
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    backgroundColor: "white",
  },
  titleInput: {
    width: 150,
    paddingLeft: 10,
    backgroundColor: "silver",
  },
  boxAcordeon: {
    flexDirection: "row",
    alignItems: "center",
  },
  chooseOpcion: {
    backgroundColor: "white",
    paddingRight: 35,
  },
  arrowAcordeon: {
    width: 50,
    marginLeft: 80,
    paddingLeft: 12,
  },
  dropBox: {
    position: "absolute",
    backgroundColor: "white",
    width: "56%",
    right: "5%",
    top: 65,
    borderRadius: 5,
    marginTop: 2,
  },
  textBox: {
    fontSize: 24,
    paddingLeft: 32,
  },
  select: {
    backgroundColor: "silver",
    borderRadius: 5,
  },
});
