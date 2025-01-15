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

import db_boring_rough from "../assets/db_boring_rough.json";
import db_boring_finishing from "../assets/db_boring_finishing.json";

export default function Boring() {
  const { contextInput } = useContext(DataContext);
  const { contextTypeProces } = useContext(DataContext);
  const { contextTypeMaterial } = useContext(DataContext);
  const { contextCatalogBoring } = useContext(DataContext);

  const { setContextCatalogBoring } = useContext(DataContext);
  // 'fetch'
  useEffect(() => {
    let dataFromDB;

    let tableCoef = null;
    let tableD = null;

    if (contextInput.D && contextInput.d && contextInput.L) {
      let coefL_d = contextInput.L / contextInput.d;
      coefL_d < 4
        ? (tableCoef = 2.5)
        : coefL_d < 6.3
        ? (tableCoef = 4.0)
        : coefL_d > 6.3
        ? (tableCoef = 6.3)
        : "";

      contextInput.d <= 37
        ? (tableD = 37)
        : contextInput.d > 37 && contextInput.d <= 120
        ? (tableD = 120)
        : contextInput.d > 120
        ? (tableD = 121)
        : "";
      if (contextTypeProces === "roughing") {
        // DB
        dataFromDB = db_boring_rough.find(
          (item) =>
            item.material === contextTypeMaterial &&
            item.coefficient_L_d === String(tableCoef) &&
            item.diameter === String(tableD)
        );
      } else if (contextTypeProces === "finishing") {
        // DB
        dataFromDB = db_boring_finishing.find(
          (item) =>
            item.material === contextTypeMaterial &&
            item.coefficient_L_d === String(tableCoef)
        );
      }
      setContextCatalogBoring({
        material: dataFromDB.material,
        coefficient_L_d: dataFromDB.coefficient_L_d,
        vc_Min: dataFromDB.vc_Min,
        vc_Max: dataFromDB.vc_Max,
        R_plate: dataFromDB.R_plate,
        f_Min: dataFromDB.f_Min,
        f_Max: dataFromDB.f_Max,
        ap_Min: dataFromDB.ap_Min,
        ap_Max: dataFromDB.ap_Max,
      });
    }
  }, [contextInput, contextTypeProces, contextTypeMaterial]);
  useEffect(() => {
    console.log(contextCatalogBoring);
  }, [contextCatalogBoring]);
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
