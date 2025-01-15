import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import ImgToolsMilling from "./ImgToolsMilling";
import ImgToolsPlates from "./ImgToolsPlates";
import ImgToolsBoring from "./ImgToolsBoring";

export default function TypeToolsImg() {
  const { namePage } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);
  const { contextCatalogPlate } = useContext(DataContext);
  const { contextTypeProces } = useContext(DataContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const imageMapPlate = {
    adkt: require("../assets/pl-ADKT.png"),
    odmt: require("../assets/pl-ODMT.png"),
    rdmt: require("../assets/pl-RDMT.png"),
    sekt: require("../assets/pl-SEKT.png"),
    tngxm: require("../assets/pl-TNGX-M.png"),
    tngx: require("../assets/pl-TNGX.png"),
    tpkr: require("../assets/pl-TPKR.png"),
    vcgt: require("../assets/pl-VCGT.png"),
    vhm: require("../assets/vhm-icon.png"),
    bor_rough: require("../assets/boring-rough.jpg"),
    bor_finish: require("../assets/Boring-finish.jpg"),
  };
  const [iconTypeTools, setIconTypeTools] = useState();

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  useEffect(() => {
    if (namePage === "Milling") {
      if (
        contextTypeTools === "toolhss" ||
        contextTypeTools === "toolcarbide"
      ) {
        setIconTypeTools(imageMapPlate.vhm);
      } else if (contextTypeTools === "toolfolding") {
        setIconTypeTools(imageMapPlate[contextCatalogPlate.name]);
      }
    } else if (namePage === "Boring") {
      if (contextTypeProces === "roughing") {
        setIconTypeTools(imageMapPlate.bor_rough);
      } else {
        setIconTypeTools(imageMapPlate.bor_finish);
      }
    }
  }, [contextTypeTools, contextCatalogPlate, contextTypeProces, namePage]);
  return (
    <View style={gStyle.container}>
      <TouchableOpacity
        onPress={toggleAccordion}
        style={gStyle.accordionHeader}
      >
        <View style={gStyle.row}>
          <View style={gStyle.typeMaterial}>
            <Text style={gStyle.title}>IMG - </Text>
            <Image style={lStyle.iconTypePlate} source={iconTypeTools} />
          </View>
          {isAccordionOpen ? (
            <Image
              style={gStyle.imgArrowAcordion}
              source={require("../assets/arrowAcordionUp.png")}
            />
          ) : (
            <Image
              style={gStyle.imgArrowAcordion}
              source={require("../assets/arrowAcordionDown.png")}
            />
          )}
        </View>
        <View style={gStyle.underLine}></View>
      </TouchableOpacity>

      {isAccordionOpen &&
        (namePage === "Milling" ? (
          <ImgToolsMilling />
        ) : namePage === "Milling" && contextTypeTools === "toolfolding" ? (
          <ImgToolsPlates />
        ) : namePage === "Boring" ? (
          <ImgToolsBoring />
        ) : null)}
    </View>
  );
}

const lStyle = StyleSheet.create({
  iconTypePlate: {
    width: 60,
    height: 45,
    marginBottom: 15,
  },
});
