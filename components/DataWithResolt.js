import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

export default function DataWithResolt() {
  const { contextResult } = useContext(DataContext);
  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>Obliczanie według katalogu</Text>
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

const lStyle = StyleSheet.create({});
