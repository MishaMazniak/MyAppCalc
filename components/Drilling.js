import React, { useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import TypeTools from "./TypeTools";
import InputForm from "./InputForm";
import TypeMaterial from "./TypeMaterial";
import DataFromCatalog from "./DataFromCatalog";
import DataWithResolt from "./DataWithResolt";
import CalkOwnerParameters from "./CalkOwnerParameters";

import db_vc_drilling from "../assets/db_vc_drilling.json";
import db_f_drill_toolhss from "../assets/db_f_drill_toolhss.json";
import db_f_drill_toolcarbide from "../assets/db_f_drill_toolcarbide.json";
import db_f_drill_toolfolding from "../assets/db_f_drill_toolfolding.json";

export default function Drilling() {
  const { contextInput } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);
  const { contextTypeMaterial } = useContext(DataContext);
  const { contextCatalog } = useContext(DataContext);

  const { setContextCatalog } = useContext(DataContext);
  const { setContextResult } = useContext(DataContext);

  useEffect(() => {
    let dataVC = 0;
    let dataF = 0;
    let speedRotation = 0;
    let integerDiameter = Math.floor(contextInput.d);
    // Vc_min + Vc_max forom database
    dataVC = db_vc_drilling.find(
      (item) => item.material === `${contextTypeMaterial}`
    );
    // 'f' from database
    if (contextTypeTools === "toolhss") {
      dataF = db_f_drill_toolhss.find(
        (item) => Number(item.diametr) === integerDiameter
      );
    } else if (contextTypeTools === "toolcarbide") {
      dataF = db_f_drill_toolcarbide.find(
        (item) => Number(item.diametr) === integerDiameter
      );
    } else if (contextTypeTools === "toolfolding") {
      dataF = db_f_drill_toolfolding.find(
        (item) => Number(item.diametr) === integerDiameter
      );
    }
    speedRotation = dataF ? dataF[contextTypeMaterial] : 0;
    setContextCatalog({
      Vcmin: dataVC[contextTypeTools],
      Vcmax: dataVC[`${contextTypeTools}Max`],
      f: speedRotation,
    });
  }, [contextInput, contextTypeTools, contextTypeMaterial]);

  useEffect(() => {
    if (contextCatalog.Vcmin && contextCatalog.Vcmax) {
      const Smin = Math.floor(
        (contextCatalog.Vcmin * 1000) / (Math.PI * contextInput.d)
      );
      const Smax = Math.floor(
        (contextCatalog.Vcmax * 1000) / (Math.PI * contextInput.d)
      );
      const Fmin = Math.floor(Smin * contextCatalog.f);
      const Fmax = Math.floor(Smax * contextCatalog.f);
      setContextResult({
        Smin,
        Smax,
        Fmin,
        Fmax,
      });
    }
  }, [contextCatalog, contextInput]);
  return (
    <ScrollView contentContainerStyle={gStyle.scrollContainer}>
      <SafeAreaView style={gStyle.main}>
        <InputForm />
        {contextInput.d && (contextInput.Vc || contextInput.f) ? (
          <CalkOwnerParameters />
        ) : null}
        <TypeTools />
        <TypeMaterial />
        <DataFromCatalog />
        <DataWithResolt />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
