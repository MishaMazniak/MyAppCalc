import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function TypeProcess() {
  const { t, i18n } = useTranslation();
  const { setContextTypeProces } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);

  const [processed, setProcessed] = useState("roughing");
  const [showProcessed, setShowProcessed] = useState("true");

  const handleOptionChange = (option) => {
    setProcessed(option);
    setContextTypeProces(option);
  };
  const renderRadioButton = (option) => {
    const isSelected = processed === option;
    return (
      <TouchableOpacity onPress={() => handleOptionChange(option)}>
        <View style={gStyle.radioButtonOuter}>
          {isSelected && <View style={gStyle.radioButtonInner} />}
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    if (contextTypeTools !== "toolhss") {
      setShowProcessed(false);
    } else if (contextTypeTools === "toolhss") setShowProcessed(true);
  }, [contextTypeTools]);
  return (
    <View style={gStyle.container}>
      {showProcessed && (
        <View style={lStyle.row}>
          <TouchableOpacity
            style={gStyle.option}
            onPress={() => handleOptionChange("roughing")}
          >
            <Text style={gStyle.textWhite}>{t("processRoughing")}</Text>
            {renderRadioButton("roughing")}
          </TouchableOpacity>

          <TouchableOpacity
            style={gStyle.option}
            onPress={() => handleOptionChange("finishing")}
          >
            <Text style={gStyle.textWhite}>{t("processFinishing")}</Text>
            {renderRadioButton("finishing")}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const lStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
