import React, { useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import { gStyle } from "../../styles/styles";

import db_tolerance from "../../assets/dbTolerance.json";

import InputForm from "./InputForm";
import Result from "./Result";

export default function Tolerance() {
  const { contextTolerance } = useContext(DataContext);
  const { setContextToleranceResult } = useContext(DataContext);

  useEffect(() => {
    if (contextTolerance.d) {
      const nameTable = contextTolerance.type + contextTolerance.tolerance;
      const dataTolerance = db_tolerance.find(
        (item) => item.diameter === `${contextTolerance.diametrInDB}`
      );
      const toleranceValueMin = dataTolerance ? dataTolerance[nameTable] : null;
      const toleranceValueMax = dataTolerance
        ? dataTolerance[nameTable + "_max"]
        : null;

      const minD = contextTolerance.d + toleranceValueMin / 1000;
      const maxD = contextTolerance.d + toleranceValueMax / 1000;
      setContextToleranceResult({
        minVal: toleranceValueMin / 1000,
        maxVal: toleranceValueMax / 1000,
        minD: minD,
        maxD: maxD,
      });
    }
  }, [contextTolerance]);

  return (
    <SafeAreaView style={gStyle.main}>
      <InputForm />
      <Result />
      <Image
        style={styles.imgTable}
        source={require("../../assets/dopuski-i-posadki5.jpg")}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imgTable: {
    marginTop: 25,
    width: "90%",
    height: 400,
  },
});
