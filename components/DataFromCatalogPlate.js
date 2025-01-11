import React, { useContext } from "react";
import { DataContext } from "../ContextAPI/DataContext";
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
  const { contextCatalogPlate } = useContext(DataContext);

  const handleImagePress = () => {
    Linking.openURL(`${contextCatalogPlate.website}`);
  };
  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>Dane katalogowe</Text>

      <Text style={gStyle.text}>
        Vc = {contextCatalogPlate.vc_Min} - {contextCatalogPlate.vc_Max} m/min
      </Text>
      <Text style={gStyle.text}>f = {contextCatalogPlate.f} mm/ob</Text>
      <Text style={gStyle.text}>
        fz = {contextCatalogPlate.f_Min} - {contextCatalogPlate.f_Max} mm/z
      </Text>
      <Text style={gStyle.text}>
        ap = {contextCatalogPlate.ap_Min} - {contextCatalogPlate.ap_Max} mm
      </Text>
      <Text style={gStyle.text}>
        Twardość = {contextCatalogPlate.hardness} HB
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
