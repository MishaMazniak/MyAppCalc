import React, { useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";
import { gStyle } from "../../styles/styles";
import { DataContext } from "../../ContextAPI/DataContext";

import db_screws from "../../assets/db_screws.json";

import ImputTapingType from "./ImputTapingType";
import ImputTapingSize from "./ImputTapingSize";
import ResultTap from "./ResultTap";

export default function Taping() {
  const { contextTaping } = useContext(DataContext);
  const { setContextTaping } = useContext(DataContext);

  useEffect(() => {
    if (contextTaping.size) {
      const dataTap = db_screws.filter(
        (item) => item.size === `${contextTaping.size}`
      );
      const val = dataTap.find((item) => item.type === `${contextTaping.type}`);
      const valMf = dataTap.filter((item) => item.type === "Mf");
      setContextTaping((data) => ({
        ...data,
        diameter_hole: val.diameter_hole,
        thread_pitch: val.thread_pitch,
        dataMf: valMf,
      }));
    }
  }, [contextTaping.size]);
  return (
    <ScrollView>
      <SafeAreaView style={[gStyle.main, styles.back]}>
        <ImputTapingType />
        <ImputTapingSize />
        <ResultTap />
        <Image
          style={styles.imgTable}
          source={require("../../assets/taping2.jpg")}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  back: {
    height: "100%",
    paddingBottom: "50%",
  },
  imgTable: {
    marginTop: 25,
    width: "90%",
    height: 200,
  },
});
