import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import InputForm from "./InputForm";
import TypeProcess from "./TypeProcess";
import TypeToolsImg from "./TypeToolsImg";
import TypeTools from "./TypeTools";
import TypeMaterial from "./TypeMaterial";
import DataFromCatalog from "./DataFromCatalog";
import DataFromCatalogPlate from "./DataFromCatalogPlate";
import DataWithResolt from "./DataWithResolt";
import CalkOwnerParameters from "./CalkOwnerParameters";

import db_vc_milling_rough from "../assets/db_vc_milling_rough.json";
import db_vc_milling from "../assets/db_vc_milling.json";
import db_f_mill_toolhssrough from "../assets/db_f_mill_toolhssrough.json";
import db_f_mill_toolhssfinishing from "../assets/db_f_mill_toolhssfinishing.json";
import db_f_mill_toolcarbidemain from "../assets/db_f_mill_toolcarbidemain.json";
import db_milling_plates from "../assets/db_milling_plates.json";

export default function Drilling() {
  const { setContextCatalog } = useContext(DataContext);
  const { setContextResult } = useContext(DataContext);
  const { setContextCatalogPlate } = useContext(DataContext);

  const { contextInput } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);
  const { contextTypeProces } = useContext(DataContext);
  const { contextTypeMaterial } = useContext(DataContext);
  const { contextCatalogPlate } = useContext(DataContext);
  const { contextCatalog } = useContext(DataContext);
  const { contextTypePlate } = useContext(DataContext);

  const [isInputPlate, setIsInputPlate] = useState(true);
  const [valueDiameterForDB, setValueDiameterForDB] = useState(0);
  const [coefApAe, setCoefApAe] = useState({
    ap: 0,
    ae: 0,
  });

  // change data input and coef Ap Ae for HSS
  useEffect(() => {
    if (contextInput.d) {
      if (contextTypeTools === "toolhss") {
        let valCoefAp;
        let valCoefAe;
        // change "d" for DB
        if (contextInput.d >= 2 && contextInput.d <= 28) {
          setValueDiameterForDB(contextInput.d.toFixed(0));
        } else if (contextInput.d > 28) {
          setValueDiameterForDB(28);
          alert("Max diameter 28");
        }
        //coef ap
        if (contextInput.ap <= contextInput.d) valCoefAp = 1;
        if (
          contextInput.ap > contextInput.d &&
          contextInput.ap < contextInput.d * 2
        )
          valCoefAp = 0.5;
        if (contextInput.ap >= contextInput.d * 2) valCoefAp = 0.25;
        //coef ae
        if (contextInput.ae <= contextInput.d * 0.25) valCoefAe = 1;
        if (
          contextInput.ae > contextInput.d * 0.25 &&
          contextInput.ae <= contextInput.d * 0.5
        ) {
          if (contextTypeProces === "roughing") valCoefAe = 0.75;
          if (contextTypeProces === "finishing") valCoefAe = 0.65;
        }

        if (contextInput.ae >= contextInput.d) {
          if (contextTypeProces === "roughing") valCoefAe = 0.5;
          if (contextTypeProces === "finishing") valCoefAe = 0.4;
        }
        setCoefApAe({
          ap: valCoefAp,
          ae: valCoefAe,
        });
      } else if (contextTypeTools === "toolcarbide") {
        if (contextInput.d >= 1 && contextInput.d <= 20) {
          setValueDiameterForDB(contextInput.d.toFixed(0));
        } else if (contextInput.d > 20) {
          setValueDiameterForDB(20);
          alert("Max diameter 20");
        }
      } else setIsInputPlate(false);
    }
  }, [contextInput, contextTypeTools]);
  // 'fetch'
  useEffect(() => {
    if (contextInput.d) {
      let dataVC = 0;
      let dataF = 0;
      let f_mmob;
      // Data from database
      if (contextTypeTools !== "toolfolding") {
        // change input for different tools
        setIsInputPlate(true);
        // --HSS--
        if (contextTypeTools === "toolhss") {
          // Data from database for ----"roughing"----
          if (contextTypeProces === "roughing") {
            // Vc_min + Vc_max
            dataVC = db_vc_milling_rough.find(
              (item) => item.material === `${contextTypeMaterial}`
            );
            // "f"
            dataF = db_f_mill_toolhssrough.find(
              (item) => item.diametr === `${valueDiameterForDB}`
            );
            // Data from database for ----"finishing"
          } else if (contextTypeProces === "finishing") {
            // Vc_min + Vc_max
            dataVC = db_vc_milling.find(
              (item) => item.material === `${contextTypeMaterial}`
            );
            // "f"
            dataF = db_f_mill_toolhssfinishing.find(
              (item) => item.diametr === `${valueDiameterForDB}`
            );
          }
        }
        // --VHM--
        if (contextTypeTools === "toolcarbide") {
          // Vc_min + Vc_max
          dataVC = db_vc_milling.find(
            (item) => item.material === `${contextTypeMaterial}`
          );
          // "f"
          dataF = db_f_mill_toolcarbidemain.find(
            (item) => item.diametr === `${valueDiameterForDB}`
          );
        }
        if (dataF) {
          f_mmob = (dataF[contextTypeMaterial] * contextInput.z).toFixed(2);
        } else {
          console.warn("dataF is unavailable for the provided inputs");
        }
        setContextCatalog({
          Vcmin: dataVC ? dataVC[contextTypeTools] : 0,
          Vcmax: dataVC ? dataVC[`${contextTypeTools}Max`] : 0,
          f: f_mmob,
        });
      } else if (contextTypeTools === "toolfolding") {
        setIsInputPlate(false);
        const dataPlate = db_milling_plates.find(
          (item) =>
            item.name === `${contextTypePlate}` &&
            item.material === `${contextTypeMaterial}`
        );
        f_mmob = (dataPlate.f_Max * contextInput.z).toFixed(2);
        setContextCatalogPlate({
          name: dataPlate.name,
          website: dataPlate.website,
          material: dataPlate.material,
          hardness: dataPlate.hardness,
          ap_Min: dataPlate.ap_Min,
          ap_Max: dataPlate.ap_Max,
          f_Min: dataPlate.f_Min,
          f_Max: dataPlate.f_Max,
          vc_Min: dataPlate.vc_Min,
          vc_Max: dataPlate.vc_Max,
          f: f_mmob,
        });
      }
    }
  }, [
    contextTypeTools,
    contextTypeMaterial,
    contextTypeProces,
    contextTypePlate,
  ]);
  // show resoult
  useEffect(() => {
    let Smin = 0;
    let Smax = 0;
    let Fmin = 0;
    let Fmax = 0;
    if (contextCatalog.Vcmin) {
      if (contextTypeTools !== "toolfolding") {
        Smin = Math.floor(
          (contextCatalog.Vcmin * 1000) / (Math.PI * contextInput.d)
        );
        Smax = Math.floor(
          (contextCatalog.Vcmax * 1000) / (Math.PI * contextInput.d)
        );

        if (contextTypeTools === "toolhss" && contextInput.d <= 28) {
          Fmin = Math.floor(
            Smin * contextCatalog.f * coefApAe.ap * coefApAe.ae
          );
          Fmax = Math.floor(
            Smax * contextCatalog.f * coefApAe.ap * coefApAe.ae
          );
        } else if (contextTypeTools === "toolcarbide" && contextInput.d <= 20) {
          Fmin = Math.floor(Smin * contextCatalog.f);
          Fmax = Math.floor(Smax * contextCatalog.f);
        }
      } else if (contextTypeTools === "toolfolding") {
        Smin = Math.floor(
          (contextCatalogPlate.vc_Min * 1000) / (Math.PI * contextInput.d)
        );
        Smax = Math.floor(
          (contextCatalogPlate.vc_Max * 1000) / (Math.PI * contextInput.d)
        );
        Fmin = Math.floor(Smin * contextCatalogPlate.f_Min * contextInput.z);
        Fmax = Math.floor(Smax * contextCatalogPlate.f_Max * contextInput.z);
      }
    }
    setContextResult({ Smin, Smax, Fmin, Fmax });
  }, [
    contextCatalog,
    contextInput,
    coefApAe,
    contextCatalogPlate,
    contextTypeMaterial,
  ]);
  return (
    <ScrollView contentContainerStyle={gStyle.scrollContainer}>
      <SafeAreaView style={gStyle.main}>
        <TypeProcess />
        <InputForm />
        {contextInput.d && (contextInput.Vc || contextInput.f) ? (
          <CalkOwnerParameters />
        ) : null}
        <TypeToolsImg />
        <TypeTools />
        <TypeMaterial />
        {isInputPlate ? <DataFromCatalog /> : <DataFromCatalogPlate />}
        <DataWithResolt />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
