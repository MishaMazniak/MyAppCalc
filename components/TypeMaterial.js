import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function TypeMaterial() {
  const { t, i18n } = useTranslation();
  const { setContextTypeMaterial } = useContext(DataContext);

  const { contextTypeTools } = useContext(DataContext);
  const { contextTypePlate } = useContext(DataContext);
  const { namePage } = useContext(DataContext);

  const [selectedOption, setSelectedOption] = useState("steel");
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const [isTransparent, setIsTransparent] = useState(false);
  const [isTransparentAl, setIsTransparentAl] = useState(false);

  const imageMap = {
    steel: require("../assets/iso-P.jpg"),
    aluminum: require("../assets/iso-N.jpg"),
    stainles: require("../assets/iso-M.jpg"),
    iron: require("../assets/iso-K.jpg"),
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setContextTypeMaterial(option);
  };
  const renderRadioButton = (option) => {
    const isSelected = selectedOption === option;
    return (
      <TouchableOpacity
        onPress={!isSelected ? null : () => handleOptionChange(option)}
      >
        <View style={gStyle.radioButtonOuter}>
          {isSelected && <View style={gStyle.radioButtonInner} />}
        </View>
      </TouchableOpacity>
    );
  };
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  useEffect(() => {
    if (namePage === "Milling") {
      if (contextTypeTools === "toolfolding") {
        if (contextTypePlate === "tngx" || contextTypePlate === "vcgt") {
          setIsTransparent(true);
          setIsTransparentAl(false);
          handleOptionChange("aluminum");
        } else {
          setIsTransparent(false);
          setIsTransparentAl(true);
          handleOptionChange("steel");
        }
      } else {
        setIsTransparent(false);
        setIsTransparentAl(false);
      }
    }
  }, [contextTypePlate, contextTypeTools]);
  return (
    <View style={gStyle.container}>
      <TouchableOpacity
        onPress={toggleAccordion}
        style={gStyle.accordionHeader}
      >
        <View style={gStyle.row}>
          <View style={gStyle.typeMaterial}>
            <Text style={gStyle.title}>{t("typeMaterial")} - </Text>
            <Image
              style={lStyle.imgSelektMateial}
              source={imageMap[selectedOption]}
            />
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

      {isAccordionOpen && (
        <View style={lStyle.flex}>
          <TouchableOpacity
            style={gStyle.option}
            onPress={isTransparent ? null : () => handleOptionChange("steel")}
          >
            <Image
              style={[
                lStyle.imgFromMaterial,
                isTransparent && lStyle.transparent,
              ]}
              source={require("../assets/iso-P.jpg")}
            />
            {renderRadioButton("steel")}
          </TouchableOpacity>

          <TouchableOpacity
            style={gStyle.option}
            onPress={
              isTransparentAl ? null : () => handleOptionChange("aluminum")
            }
          >
            <Image
              style={[
                lStyle.imgFromMaterial,
                isTransparentAl && lStyle.transparent,
              ]}
              source={require("../assets/iso-N.jpg")}
            />
            {renderRadioButton("aluminum")}
          </TouchableOpacity>

          <TouchableOpacity
            style={gStyle.option}
            onPress={
              isTransparent ? null : () => handleOptionChange("stainles")
            }
          >
            <Image
              style={[
                lStyle.imgFromMaterial,
                isTransparent && lStyle.transparent,
              ]}
              source={require("../assets/iso-M.jpg")}
            />
            {renderRadioButton("stainles")}
          </TouchableOpacity>

          <TouchableOpacity
            style={gStyle.option}
            onPress={isTransparent ? null : () => handleOptionChange("iron")}
          >
            <Image
              style={[
                lStyle.imgFromMaterial,
                isTransparent && lStyle.transparent,
              ]}
              source={require("../assets/iso-K.jpg")}
            />
            {renderRadioButton("iron")}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const lStyle = StyleSheet.create({
  imgFromMaterial: {
    width: 100,
    height: 100,
  },
  imgSelektMateial: {
    width: 30,
    height: 30,
    marginTop: -15,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    paddingTop: 30,
  },
  transparent: {
    opacity: 0.2,
  },
});
