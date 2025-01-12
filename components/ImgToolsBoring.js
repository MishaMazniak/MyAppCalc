import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import { DataContext } from "../ContextAPI/DataContext";

export default function ImgToolsBoring() {
  const { contextTypeProces } = useContext(DataContext);

  return (
    <View style={lStyle.flex}>
      {contextTypeProces === "roughing" ? (
        <Image
          style={lStyle.imgFromMaterial}
          source={require("../assets/wytaczak-info.png")}
        />
      ) : (
        <Image
          style={lStyle.imgFromMaterial}
          source={require("../assets/wytaczakWyk.png")}
        />
      )}
    </View>
  );
}

const lStyle = StyleSheet.create({
  imgFromMaterial: {
    width: 190,
    height: 300,
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
