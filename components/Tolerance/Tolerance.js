import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { DataContext } from "../../ContextAPI/DataContext";
import InputForm from "./InputForm";
import { gStyle } from "../../styles/styles";

export default function Tolerance() {
  const { contextTolerance } = useContext(DataContext);

  useEffect(() => {
    // console.log(contextTolerance);
  }, [contextTolerance]);

  return (
    <SafeAreaView style={gStyle.main}>
      <InputForm />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
