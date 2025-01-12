import React, { useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import TypeProcess from "./TypeProcess";
import InputForm from "./InputForm";
import TypeMaterial from "./TypeMaterial";
import DataWithResolt from "./DataWithResolt";
import DataFromCatalogBoring from "./DataFromCatalogBoring";
import CalkOwnerParameters from "./CalkOwnerParameters";
import TypeToolsImg from "./TypeToolsImg";

export default function Boring() {
  const { contextInput } = useContext(DataContext);

  useEffect(() => {}, []);
  return (
    <ScrollView contentContainerStyle={gStyle.scrollContainer}>
      <SafeAreaView style={gStyle.main}>
        <TypeProcess />
        <InputForm />
        {contextInput.d !== 0 &&
        (contextInput.Vc !== 0 || contextInput.f !== 0) ? (
          <CalkOwnerParameters />
        ) : null}
        <TypeToolsImg />
        <TypeMaterial />
        <DataFromCatalogBoring />
        <DataWithResolt />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
