import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function DataFromCatalog() {
  const { t, i18n } = useTranslation();
  const { contextCatalog } = useContext(DataContext);
  const { namePage } = useContext(DataContext);
  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>{t("dataCatalog")}</Text>
      <Text style={gStyle.text}>
        Vc = {contextCatalog.Vcmin} - {contextCatalog.Vcmax} {t("mMin")}
      </Text>
      <Text style={gStyle.text}>
        f ={" "}
        {namePage !== "Drilling"
          ? `${contextCatalog.f} ${t("mmZ")}`
          : `${contextCatalog.f} ${t("mmOb")}`}
      </Text>
      <View style={gStyle.underLine}></View>
    </View>
  );
}

const lStyle = StyleSheet.create({});
