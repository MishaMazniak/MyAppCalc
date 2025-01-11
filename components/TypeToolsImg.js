import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

import ImgTools from "./ImgToolsMilling";
import ImgToolsPlates from "./ImgToolsPlates";

export default function TypeToolsImg() {
  const { contextTypeTools } = useContext(DataContext);
  const { contextCatalogPlate } = useContext(DataContext);

  const [chooseBoxImg, setChooseBoxImg] = useState("milling");
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
  };
  const [iconTypeTools, setIconTypeTools] = useState();

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  useEffect(() => {
    if (contextTypeTools === "toolhss" || contextTypeTools === "toolcarbide") {
      setChooseBoxImg("milling");
      setIconTypeTools(imageMapPlate.vhm);
    } else if (contextTypeTools === "toolfolding") {
      setChooseBoxImg("folding");
      setIconTypeTools(imageMapPlate[contextCatalogPlate.name]);
    } else setChooseBoxImg("boring");
  }, [contextTypeTools, contextCatalogPlate]);
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
        (chooseBoxImg === "milling" ? (
          <ImgTools />
        ) : chooseBoxImg === "folding" ? (
          <ImgToolsPlates />
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
