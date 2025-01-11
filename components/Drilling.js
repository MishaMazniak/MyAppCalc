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
    if (contextInput.d > 20 && contextTypeTools === "toolcarbide")
      alert("Catalog has carbide tools of size 1 - 20 ");
    if (contextInput.d > 28 && contextTypeTools === "toolfolding")
      alert("Catalog has folding tools of size 1 - 28 ");

    // Vc_min + Vc_max forom database
    const dataFromDB = db_vc_drilling.find(
      (item) => item.material === `${contextTypeMaterial}`
    );
    if (dataFromDB && dataFromDB[contextTypeTools]) {
      setContextCatalog((prevState) => ({
        ...prevState,
        Vcmin: dataFromDB[contextTypeTools],
        Vcmax: dataFromDB[`${contextTypeTools}Max`],
      }));
    }
    // 'f' from database
    let speed = 0;
    const diameter = Math.floor(contextInput.d);

    if (contextTypeTools === "toolhss") {
      const fHSS = db_f_drill_toolhss.find(
        (item) => Number(item.diametr) === diameter
      );
      speed = fHSS ? fHSS[contextTypeMaterial] : 0;
    } else if (contextTypeTools === "toolcarbide") {
      const fVHM = db_f_drill_toolcarbide.find(
        (item) => Number(item.diametr) === diameter
      );
      speed = fVHM ? fVHM[contextTypeMaterial] : 0;
    } else if (contextTypeTools === "toolfolding") {
      const fPlate = db_f_drill_toolfolding.find(
        (item) => Number(item.diametr) === diameter
      );
      speed = fPlate ? fPlate[contextTypeMaterial] : 0;
    }
    setContextCatalog((prevState) => ({
      ...prevState,
      f: speed,
    }));
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
        {contextInput.d !== 0 &&
        (contextInput.Vc !== 0 || contextInput.f !== 0) ? (
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
