import React, { useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import { gStyle } from "../../styles/styles";

import ImputTapingType from "./ImputTapingType";

import db_tolerance from "../../assets/dbTolerance.json";

export default function Taping() {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={gStyle.main}>
      <ImputTapingType />
      <Image
        style={styles.imgTable}
        source={require("../../assets/taping2.jpg")}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imgTable: {
    marginTop: 25,
    width: "90%",
    height: 180,
  },
});
