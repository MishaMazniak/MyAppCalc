import React from "react";
import { View, Text, TextInput } from "react-native";
import { stylesTol } from "../../styles/styleTolerance";

export default function ImputDiameter({ getDataInput }) {
  return (
    <>
      <View style={[stylesTol.wrapInput, stylesTol.wrapDiameter]}>
        <Text style={[stylesTol.titleInput, stylesTol.text]}>Diameter:</Text>
        <TextInput
          style={[stylesTol.input, stylesTol.text]}
          keyboardType="numeric"
          onChangeText={(value) =>
            getDataInput("d", Math.abs(parseFloat(value)))
          }
        />
        <Text style={[stylesTol.units, stylesTol.text]}>mm</Text>
      </View>
    </>
  );
}
