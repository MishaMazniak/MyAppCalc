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
  const [isAccordionOpen, setIsAccordionOpen] = useState({
    holeShaft: false,
    type: false,
    tolerance: false,
  });
  const [dataInput, setDataInput] = useState({
    holeShaft: "Hole",
    type: "H",
    tolerance: "6",
    d: "",
  });
  const toggleAccordion = (name) => {
    setIsAccordionOpen((prevState) => ({
      ...prevState,
      [name]: !isAccordionOpen[name],
    }));
  };
  const getDataInput = (name, value) => {
    setDataInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "holeShaft") {
      toggleAccordion("holeShaft");
    } else if (name === "type") {
      toggleAccordion("type");
    } else if (name === "tolerance") {
      toggleAccordion("tolerance");
    }
  };

  return (
    <SafeAreaView style={gStyle.main}>
      <View style={[styles.wrapInput]}>
        <Text style={[styles.titleInput, styles.text]}>Hole/Shaft:</Text>
        <TouchableOpacity
          onPress={() => toggleAccordion("holeShaft")}
          style={styles.boxAcordeon}
        >
          <Text style={[styles.chooseOpcion, styles.text]}>
            {dataInput.holeShaft}
          </Text>
          <Text style={[styles.arrowAcordeon, styles.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapInput, styles.wrapDiameter]}>
        <Text style={[styles.titleInput, styles.text]}>Diameter:</Text>
        <TextInput
          style={[styles.input, styles.text]}
          keyboardType="numeric"
          onChangeText={(value) =>
            getDataInput("d", Math.abs(parseFloat(value)))
          }
        />
        <Text style={[styles.units, styles.text]}>mm</Text>
      </View>
      <View style={[styles.wrapInput]}>
        <Text style={[styles.titleInput, styles.text]}>Type:</Text>
        <TouchableOpacity
          onPress={() => toggleAccordion("type")}
          style={styles.boxAcordeon}
        >
          <Text style={[styles.chooseOpcion, styles.text]}>
            {dataInput.type}
          </Text>
          <Text style={[styles.arrowAcordeon, styles.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapInput]}>
        <Text style={[styles.titleInput, styles.text]}>Tolerance:</Text>
        <TouchableOpacity
          onPress={() => toggleAccordion("tolerance")}
          style={styles.boxAcordeon}
        >
          <Text style={[styles.chooseOpcion, styles.text]}>
            {dataInput.tolerance}
          </Text>
          <Text style={[styles.arrowAcordeon, styles.text]}>
            {isAccordionOpen ? "\u25B2" : "\u25BC"}
          </Text>
        </TouchableOpacity>
      </View>
      {isAccordionOpen.holeShaft && (
        <View style={styles.dropBoxHoleShaft}>
          <TouchableOpacity onPress={() => getDataInput("holeShaft", "Hole")}>
            <Text
              style={[
                styles.textBox,
                dataInput.holeShaft === "Hole" ? styles.select : NaN,
              ]}
            >
              Hole
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getDataInput("holeShaft", "Shaft")}>
            <Text
              style={[
                styles.textBox,
                dataInput.holeShaft === "Shaft" ? styles.select : NaN,
              ]}
            >
              Shaft
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {isAccordionOpen.type && (
        <View style={styles.dropBoxType}>
          <TouchableOpacity onPress={() => getDataInput("holeShaft", "Hole")}>
            <Text
              style={[
                styles.textBox,
                dataInput.holeShaft === "Hole" ? styles.select : NaN,
              ]}
            >
              Hole
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getDataInput("holeShaft", "Shaft")}>
            <Text
              style={[
                styles.textBox,
                dataInput.holeShaft === "Shaft" ? styles.select : NaN,
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
    fontSize: 26,
  },
  wrapInput: {
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
  wrapDiameter: {
    justifyContent: "flex-start",
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
  dropBoxHoleShaft: {
    position: "absolute",
    backgroundColor: "white",
    width: "56%",
    right: "5%",
    top: 65,
    borderRadius: 5,
    marginTop: 2,
  },
  dropBoxType: {
    position: "absolute",
    backgroundColor: "white",
    width: "56%",
    right: "5%",
    top: 180,
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
  input: {
    width: "48%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 25,
  },
  units: {
    backgroundColor: "silver",
    paddingLeft: 7,
    paddingRight: 8,
    borderRadius: 5,
  },
});
