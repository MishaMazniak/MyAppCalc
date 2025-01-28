import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import { gStyle } from "../../styles/styles";

import InputForm from "./InputForm";
import Result from "./Result";

export default function Tolerance() {
  const { contextTolerance } = useContext(DataContext);

  useEffect(() => {
    // console.log(contextTolerance);
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
