import React, { useContext } from "react";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { gStyle } from "../styles/styles";

export default function DataFromCatalogPlate() {
  const { t, i18n } = useTranslation();
  const { contextCatalogPlate } = useContext(DataContext);

  const handleImagePress = () => {
    Linking.openURL(`${contextCatalogPlate.website}`);
  };
  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>{t("dataCatalog")}</Text>

      <Text style={gStyle.text}>
        Vc = {contextCatalogPlate.vc_Min} - {contextCatalogPlate.vc_Max}{" "}
        {t("mMin")}
      </Text>
      <Text style={gStyle.text}>
        fz = {contextCatalogPlate.f_Min} - {contextCatalogPlate.f_Max}{" "}
        {t("mmZ")}
      </Text>
      <Text style={gStyle.text}>
        ap = {contextCatalogPlate.ap_Min} - {contextCatalogPlate.ap_Max}{" "}
        {t("mm")}
      </Text>
      <Text style={gStyle.text}>
        {t("hardness")} = {contextCatalogPlate.hardness} HB
      </Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Image style={lStyle.imgInfo} source={require("../assets/info.png")} />
      </TouchableOpacity>
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
