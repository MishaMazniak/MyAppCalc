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
          ? `S = 0 - 0 ${t("obMin")}`
          : `S = ${contextResult.Smin} - ${contextResult.Smax} ${t("obMin")}`}
      </Text>
      <Text style={gStyle.text}>
        {isNaN(contextResult.Fmin)
          ? `F = 0 - 0 ${t("mmMin")}`
          : `F = ${contextResult.Fmin} - ${contextResult.Fmax} ${t("mmMin")}`}
      </Text>
    </View>
  );
}

const lStyle = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
