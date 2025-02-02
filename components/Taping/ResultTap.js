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
          <Text style={[styles.tapText, styles.mainSize]}>
            {contextTaping.type}
            {contextTaping.size}x{contextTaping.thread_pitch}
          </Text>
          {contextTaping.dataMf &&
            contextTaping.dataMf.map((option, index) => (
              <Text style={styles.textMf} key={index}>
                {contextTaping.type}
                {option.size}x{option.thread_pitch}
              </Text>
            ))}
        </View>
        <View style={styles.boxData}>
          <Image
            style={styles.imgTable}
            source={require("../../assets/diamete-hole.png")}
          />
          <Text style={[styles.tapText, styles.mainSize]}>
            {contextTaping.diameter_hole} mm
          </Text>
          {contextTaping.dataMf &&
            contextTaping.dataMf.map((option, index) => (
              <Text style={styles.textMf} key={index}>
                {option.diameter_hole} mm
              </Text>
            ))}
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
    minHeight: 180,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imgTable: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  boxData: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  tapText: {
    fontSize: 26,
    color: "#0905f2",
  },
  textMf: {
    fontSize: 24,
    color: "#000",
  },
  mainSize: {
    marginBottom: 10,
  },
});
