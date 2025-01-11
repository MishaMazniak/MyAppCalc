import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function ImgToolsMilling() {
  return (
    <View style={lStyle.flex}>
      <Image
        style={lStyle.imgFromMaterial}
        source={require("../assets/Ap-Ae_drill-rough..png")}
      />
      <Image
        style={lStyle.imgFromMaterial}
        source={require("../assets/Ap-Ae-Mill-rough.png")}
      />
    </View>
  );
}

const lStyle = StyleSheet.create({
  imgFromMaterial: {
    width: 150,
    height: 230,
    margin: 5,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingTop: 30,
  },
});
