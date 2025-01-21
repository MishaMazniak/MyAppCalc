import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import InputForDrilling from "./InputForDrilling";
import InputForMilling from "./InputForMilling";
import InputForBoring from "./InputForBoring";

export default function InputForm() {
  const { namePage } = useContext(DataContext);
  const { setContextInput } = useContext(DataContext);
  const { contextInput } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);

  const [infoAboutCatalog, setInfoAboutCatalog] = useState({
    name: "",
    value: "",
  });

  const setValueFromInput = (name, value) => {
    setContextInput((prevState) => {
      const updatedState = {
        ...prevState,
        [name]: value,
      };
      if (!updatedState.z) {
        updatedState.z = 2;
      }
      return updatedState;
    });
  };
  useEffect(() => {
    let name = "";
    let value = "";
    if (contextInput.d) {
      if (namePage === "Drilling") {
        if (contextTypeTools === "toolcarbide") {
          if (contextInput.d > 20) {
            (name = "VHM"), (value = "1 - 20");
          } else name = "";
        } else if (contextTypeTools === "toolfolding") {
          if (contextInput.d < 8 || contextInput.d > 35) {
            (name = "Plate"), (value = "8 - 35");
          } else name = "";
        }
      } else if (namePage === "Milling") {
        if (contextTypeTools === "toolhss") {
          if (contextInput.d > 28) {
            (name = "HSS"), (value = "2 - 28");
          } else name = "";
        } else if (contextTypeTools === "toolcarbide") {
          if (contextInput.d > 20) {
            (name = "VHM"), (value = "1 - 20");
          } else name = "";
        }
      }
    }
    setInfoAboutCatalog({
      name: name,
      value: value,
    });
  }, [contextInput, contextTypeTools]);
  return (
    <View style={gStyle.main}>
      {infoAboutCatalog.name && (
        <View style={styles.boxWarning}>
          <Image
            style={styles.imgWarning}
            source={require("../assets/warning.png")}
          />
          <Text style={styles.textInfo}>
            The catalog contains data for {infoAboutCatalog.name} tools d ={" "}
            {infoAboutCatalog.value}{" "}
          </Text>
        </View>
      )}

      {namePage === "Drilling" ? (
        <InputForDrilling setValueFromInput={setValueFromInput} />
      ) : namePage === "Milling" ? (
        <InputForMilling setValueFromInput={setValueFromInput} />
      ) : namePage === "Boring" ? (
        <InputForBoring setValueFromInput={setValueFromInput} />
      ) : (
        NaN
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  boxWarning: {
    flexDirection: "row",
  },
  imgWarning: {
    width: 20,
    height: 20,
  },
  textInfo: {
    color: "white",
  },
});
