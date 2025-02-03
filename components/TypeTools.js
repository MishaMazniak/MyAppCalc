import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function TypeTools() {
  const { t, i18n } = useTranslation();
  const { setContextTypeTools } = useContext(DataContext);
  const { setContextTypePlate } = useContext(DataContext);
  const { contextTypeMaterial } = useContext(DataContext);

  const [selectedOption, setSelectedOption] = useState("toolhss");
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [dinoNameTools, setDinoNameTools] = useState("HSS");

  const handleOptionChange = (option) => {
    if (contextTypeMaterial !== "aluminum") {
      setContextTypePlate("adkt");
    } else setContextTypePlate("tngx");

    if (option === "toolhss") {
      setDinoNameTools("HSS");
    } else if (option === "toolcarbide") {
      setDinoNameTools("VHM");
    } else if (option === "toolfolding") {
      setDinoNameTools("Plate");
    }
    setContextTypeTools(option);
    setSelectedOption(option);
  };
  const renderRadioButton = (option) => {
    const isSelected = selectedOption === option;
    return (
      <TouchableOpacity onPress={() => handleOptionChange(option)}>
        <View style={gStyle.radioButtonOuter}>
          {isSelected && <View style={gStyle.radioButtonInner} />}
        </View>
      </TouchableOpacity>
    );
  };
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <View style={gStyle.container}>
      <TouchableOpacity
        onPress={toggleAccordion}
        style={gStyle.accordionHeader}
      >
        <View style={gStyle.row}>
          <Text style={gStyle.title}>
            {t("typeTools")} - {dinoNameTools}
          </Text>
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

      {isAccordionOpen && (
        <View style={gStyle.row}>
          <TouchableOpacity
            style={gStyle.option}
            onPress={() => handleOptionChange("toolhss")}
          >
            <Text style={gStyle.textWhite}>HSS</Text>
            {renderRadioButton("toolhss")}
          </TouchableOpacity>

          <TouchableOpacity
            style={[gStyle.option, gStyle.optionCenter]}
            onPress={() => handleOptionChange("toolcarbide")}
          >
            <Text style={gStyle.textWhite}>VHM</Text>
            {renderRadioButton("toolcarbide")}
          </TouchableOpacity>

          <TouchableOpacity
            style={gStyle.option}
            onPress={() => handleOptionChange("toolfolding")}
          >
            <Text style={gStyle.textWhite}>Plate</Text>
            {renderRadioButton("toolfolding")}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const lStyle = StyleSheet.create({});
