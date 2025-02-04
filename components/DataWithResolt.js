import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function DataWithResolt() {
  const { t, i18n } = useTranslation();
  const { contextResult } = useContext(DataContext);
  return (
    <View style={gStyle.container}>
      <Text style={[gStyle.title, lStyle.text]}>{t("datFromCatalog")}</Text>
      <Text style={gStyle.text}>
        {isNaN(contextResult.Smin)
          ? "S = 0 - 0 ob/min"
          : `S = ${contextResult.Smin} - ${contextResult.Smax} ob/min`}
      </Text>
      <Text style={gStyle.text}>
        {isNaN(contextResult.Fmin)
          ? "F = 0 - 0 mm/min"
          : `F = ${contextResult.Fmin} - ${contextResult.Fmax} mm/min`}
      </Text>
    </View>
  );
}

const lStyle = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
