import React, { useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import { gStyle } from "../../styles/styles";

import ImputTapingType from "./ImputTapingType";
import ImputTapingSize from "./ImputTapingSize";
import ResultTap from "./ResultTap";

import db_screws from "../../assets/db_screws.json";

export default function Taping() {
  const { contextTaping } = useContext(DataContext);
  useEffect(() => {
    console.log(contextTaping);
  }, [contextTaping]);

  return (
    <SafeAreaView style={gStyle.main}>
      <ImputTapingType />
      <ImputTapingSize />
      <ResultTap />
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
