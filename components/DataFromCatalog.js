import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

export default function DataFromCatalog() {
  const { contextCatalog } = useContext(DataContext);
  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>Dane katalogowe</Text>
      <Text style={gStyle.text}>
        Vc = {contextCatalog.Vcmin} - {contextCatalog.Vcmax} m/min
      </Text>
      <Text style={gStyle.text}>f = {contextCatalog.f} mm/ob</Text>
      <View style={gStyle.underLine}></View>
    </View>
  );
}

const lStyle = StyleSheet.create({});
