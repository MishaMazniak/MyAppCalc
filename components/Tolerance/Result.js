import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import { stylesTol } from "../../styles/styleTolerance";

export default function Result() {
  const { contextTolerance } = useContext(DataContext);
  const { contextToleranceResult } = useContext(DataContext);
  return (
    <>
      <View style={styles.resultMain}>
        <View style={styles.flexRow}>
          <Text style={[stylesTol.text, styles.textForType]}>
            {contextTolerance.type}
            {contextTolerance.tolerance}
          </Text>
          <Text style={[stylesTol.text, styles.textForDiameter]}>
            {contextTolerance.d}
          </Text>
          <View style={styles.flexColumn}>
            <Text style={stylesTol.text}>
              {contextToleranceResult.maxVal > 0
                ? "+" + contextToleranceResult.maxVal
                : contextToleranceResult.maxVal}
            </Text>
            <Text style={stylesTol.text}>
              {contextToleranceResult.minVal > 0
                ? "+" + contextToleranceResult.minVal
                : contextToleranceResult.minVal}
            </Text>
          </View>
        </View>
        <View>
          <Text style={stylesTol.text}>
            ({contextToleranceResult.minD} - {contextToleranceResult.maxD} mm)
          </Text>
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
