import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import InputForDrilling from "./InputForDrilling";
import InputForMilling from "./InputForMilling";
import InputForBoring from "./InputForBoring";
import InputForMillingPlate from "./InputForMillingPlate";

export default function InputForm() {
  const { namePage } = useContext(DataContext);
  const { setContextInput } = useContext(DataContext);
  const { contextInput } = useContext(DataContext);
  const { contextCatalog } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);

  const [placeholderData, setPlaceholderData] = useState({
    d: "",
    D: "",
    L: "",
    Vcmin: "",
    f: "",
    z: "",
    ap: "",
    ae: "",
  });
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
      if (!updatedState.z || isNaN(updatedState.z)) {
        updatedState.z = 2;
      }
      return updatedState;
    });
  };
  // data from placeholder
  useEffect(() => {
    let name = "";
    let value = "";
    if (namePage === "Drilling") {
      if (contextInput.d) {
        if (contextTypeTools === "toolcarbide") {
          if (contextInput.d > 20) {
            (name = "VHM"), (value = "1 - 20");
          } else name = "";
        } else if (contextTypeTools === "toolfolding") {
          if (contextInput.d < 8 || contextInput.d > 36) {
            (name = "Plate"), (value = "8 - 35");
          } else name = "";
        }
      }
    }
    const checkCatalog_isNaN = Object.entries(contextCatalog).reduce(
      (acc, [key, value]) => {
        acc[key] = isNaN(value) ? "0" : String(value);
        return acc;
      },
      {}
    );
    const checkInput_isNaN = Object.entries(contextInput).reduce(
      (acc, [key, value]) => {
        acc[key] = isNaN(value) ? "0" : String(value);
        return acc;
      },
      {}
    );
    setPlaceholderData((prev) => ({
      ...prev,
      ...checkCatalog_isNaN,
      ...checkInput_isNaN,
      ap: String(contextInput.d),
      ae: String(contextInput.d * 0.1),
      f: String(contextCatalog.f),
    }));
    setInfoAboutCatalog({
      name: name,
      value: value,
    });
  }, [contextInput, contextCatalog, contextTypeTools]);
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
        <InputForDrilling
          placeholderData={placeholderData}
          setValueFromInput={setValueFromInput}
        />
      ) : namePage === "Milling" && contextTypeTools !== "toolfolding" ? (
        <InputForMilling
          placeholderData={placeholderData}
          setValueFromInput={setValueFromInput}
        />
      ) : namePage === "Milling" && contextTypeTools === "toolfolding" ? (
        <InputForMillingPlate
          placeholderData={placeholderData}
          setValueFromInput={setValueFromInput}
        />
      ) : namePage === "Boring" ? (
        <InputForBoring
          placeholderData={placeholderData}
          setValueFromInput={setValueFromInput}
        />
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
