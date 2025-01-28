import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { stylesTol } from "../../styles/styleTolerance";

export default function Result() {
  return (
    <>
      <View style={styles.resultMain}>
        <View style={styles.flexRow}>
          <Text style={[stylesTol.text, styles.textForType]}>h5</Text>
          <Text style={[stylesTol.text, styles.textForDiameter]}>10</Text>
          <View style={styles.flexColumn}>
            <Text style={stylesTol.text}>0</Text>
            <Text style={stylesTol.text}>-0.008</Text>
          </View>
        </View>
        <View>
          <Text style={stylesTol.text}>(9.992 - 10 mm)</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  resultMain: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    width: "90%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 5,
  },
  flexRow: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  flexColumn: {
    alignItems: "flex-end",
  },
  textForType: {
    color: "red",
    fontSize: 40,
  },
  textForDiameter: {
    color: "green",
    fontSize: 40,
    fontWeight: "600",
  },
});
