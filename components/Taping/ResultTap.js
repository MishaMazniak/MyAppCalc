import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";

export default function ResultTap() {
  const { contextTaping } = useContext(DataContext);
  return (
    <>
      <View style={styles.resultMain}>
        <View style={styles.boxData}>
          <Image
            style={styles.imgTable}
            source={require("../../assets/screw.png")}
          />
          <Text style={styles.tapText}>
            {contextTaping.type}
            {contextTaping.size}x{contextTaping.thread}
          </Text>
        </View>
        <View style={styles.boxData}>
          <Image
            style={styles.imgTable}
            source={require("../../assets/diamete-hole.png")}
          />
          <Text style={styles.tapText}>{contextTaping.d} mm</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  resultMain: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    width: "90%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  imgTable: {
    width: 50,
    height: 50,
  },
  boxData: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  tapText: {
    fontSize: 26,
    color: "#0905f2",
  },
});
