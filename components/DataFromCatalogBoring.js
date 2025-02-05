import React, { useContext } from "react";
import { DataContext } from "../ContextAPI/DataContext";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/styles";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function DataFromCatalogBoring() {
  const { t, i18n } = useTranslation();
  const { contextCatalogBoring } = useContext(DataContext);
  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>{t("dataCatalog")}</Text>

      <Text style={gStyle.text}>
        Vc = {contextCatalogBoring.vc_Min} - {contextCatalogBoring.vc_Max}{" "}
        {t("mMin")}
      </Text>
      <Text style={gStyle.text}>
        fk = {contextCatalogBoring.f_Min} - {contextCatalogBoring.f_Max}{" "}
        {t("mmOb")}
      </Text>
      <Text style={gStyle.text}>
        ap = {contextCatalogBoring.ap_Min} - {contextCatalogBoring.ap_Max}{" "}
        {t("mm")}
      </Text>
      <Text style={gStyle.text}>
        R = {contextCatalogBoring.R_plate} {t("mm")}
      </Text>
      <View style={gStyle.underLine}></View>
    </View>
  );
}

const lStyle = StyleSheet.create({
  imgInfo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
});
