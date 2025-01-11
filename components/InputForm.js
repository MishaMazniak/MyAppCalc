import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import InputForDrilling from "./InputForDrilling";
import InputForMilling from "./InputForMilling";
import InputForMillingPlate from "./InputForMillingPlate";

export default function InputForm() {
  const { namePage } = useContext(DataContext);
  const { setContextInput } = useContext(DataContext);
  const { contextInput } = useContext(DataContext);
  const { contextCatalog } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);

  const [placeholderData, setPlaceholderData] = useState({
    d: "",
    Vcmin: "",
    f: "",
    z: "",
    ap: "",
    ae: "",
  });

  const setValueFromInput = (name, value) => {
    setContextInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
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
    }));
  }, [contextInput, contextCatalog]);
  return (
    <View style={gStyle.main}>
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
      ) : (
        NaN
      )}
    </View>
  );
}
const styles = StyleSheet.create({});
