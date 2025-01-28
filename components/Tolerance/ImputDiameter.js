import React from "react";
import { View, Text, TextInput } from "react-native";
import { stylesTol } from "../../styles/styleTolerance";

export default function ImputDiameter({ getDataInput }) {
  const getDiameter = (name, diameter) => {
    let diametrForDB;
    if (diameter) {
      getDataInput(name, diameter);
      diameter <= 3
        ? (diametrForDB = 0)
        : diameter > 3 && diameter <= 6
        ? (diametrForDB = 3)
        : diameter > 6 && diameter <= 10
        ? (diametrForDB = 6)
        : diameter > 10 && diameter <= 14
        ? (diametrForDB = 10)
        : diameter > 14 && diameter <= 18
        ? (diametrForDB = 14)
        : diameter > 18 && diameter <= 24
        ? (diametrForDB = 18)
        : diameter > 24 && diameter <= 30
        ? (diametrForDB = 24)
        : diameter > 30 && diameter <= 40
        ? (diametrForDB = 30)
        : diameter > 40 && diameter <= 50
        ? (diametrForDB = 40)
        : diameter > 50 && diameter <= 65
        ? (diametrForDB = 50)
        : diameter > 65 && diameter <= 80
        ? (diametrForDB = 65)
        : diameter > 80 && diameter <= 100
        ? (diametrForDB = 80)
        : diameter > 100 && diameter <= 120
        ? (diametrForDB = 100)
        : diameter > 120 && diameter <= 140
        ? (diametrForDB = 120)
        : diameter > 140 && diameter <= 160
        ? (diametrForDB = 140)
        : diameter > 160 && diameter <= 180
        ? (diametrForDB = 160)
        : diameter > 180 && diameter <= 200
        ? (diametrForDB = 180)
        : diameter > 200 && diameter <= 225
        ? (diametrForDB = 200)
        : diameter > 225 && diameter <= 250
        ? (diametrForDB = 225)
        : diameter > 250
        ? (diametrForDB = 225)
        : NaN;
      getDataInput("diametrInDB", diametrForDB);
    }
  };
  return (
    <>
      <View style={[stylesTol.wrapInput, stylesTol.wrapDiameter]}>
        <Text style={[stylesTol.titleInput, stylesTol.text]}>Diameter:</Text>
        <TextInput
          style={[stylesTol.input, stylesTol.text]}
          keyboardType="numeric"
          onChangeText={(value) =>
            getDiameter("d", Math.abs(parseFloat(value)))
          }
        />
        <Text style={[stylesTol.units, stylesTol.text]}>mm</Text>
      </View>
    </>
  );
}
