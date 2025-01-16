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
  const { setContextResult } = useContext(DataContext);
  // 'fetch'
  useEffect(() => {
    let dataFromDB;
    let coefL_D = 0;

    let tableCoef = null;
    let tableD = null;

    if (contextInput.D && contextInput.d && contextInput.L) {
      coefL_D = contextInput.L / contextInput.D;

      if (coefL_D < 4) {
        tableCoef = 2.5;
      } else if (coefL_D >= 4 && coefL_D < 6.3) {
        tableCoef = 4;
      } else tableCoef = 6.3;

      if (contextInput.d <= 37) {
        tableD = 37;
      } else if (contextInput.d > 37 && contextInput.d <= 120) {
        tableD = 120;
      } else tableD = 121;

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
    let Smin = 0;
    let Smax = 0;
    let Fmin = 0;
    let Fmax = 0;
    if (contextCatalogBoring.material !== "") {
      // 'S' for "info catalog"
      Smin = Math.floor(
        (contextCatalogBoring.vc_Min * 1000) / (contextInput.d * 3.14)
      );
      Smax = Math.floor(
        (contextCatalogBoring.vc_Max * 1000) / (contextInput.d * 3.14)
      );
      // 'F' for "info catalog"
      Fmin = Math.floor(Smin * contextCatalogBoring.f_Min);
      Fmax = Math.floor(Smax * contextCatalogBoring.f_Max);
    }
    setContextResult({ Smin, Smax, Fmin, Fmax });
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
