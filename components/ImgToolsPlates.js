import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

export default function ImgToolsPlates() {
  const { setContextTypeMaterial } = useContext(DataContext);
  const { setContextTypePlate } = useContext(DataContext);

  const { contextTypeTools } = useContext(DataContext);
  const { contextTypeMaterial } = useContext(DataContext);

  const [selectedPlate, setSelectedPlate] = useState("adkt");

  const handleOptionChange = (option) => {
    if (option === "tngx" || option === "vcgt") {
      setContextTypeMaterial("aluminum");
    } else {
      setContextTypeMaterial("steel");
    }
    setContextTypePlate(option);
    setSelectedPlate(option);
  };
  const renderRadioButton = (option) => {
    const isSelected = selectedPlate === option;
    return (
      <TouchableOpacity onPress={() => handleOptionChange(option)}>
        <View style={gStyle.radioButtonOuter}>
          {isSelected && <View style={gStyle.radioButtonInner} />}
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (
      contextTypeTools === "toolfolding" &&
      contextTypeMaterial === "aluminum"
    ) {
      handleOptionChange("tngx");
    }
  }, [contextTypeTools]);
  return (
    <View style={gStyle.container}>
      <View style={lStyle.flex}>
        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("adkt")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-ADKT.png")}
          />
          {renderRadioButton("adkt")}
        </TouchableOpacity>

        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("odmt")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-ODMT.png")}
          />
          {renderRadioButton("odmt")}
        </TouchableOpacity>

        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("rdmt")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-RDMT.png")}
          />
          {renderRadioButton("rdmt")}
        </TouchableOpacity>

        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("sekt")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-SEKT.png")}
          />
          {renderRadioButton("sekt")}
        </TouchableOpacity>
        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("tngxm")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-TNGX-M.png")}
          />
          {renderRadioButton("tngxm")}
        </TouchableOpacity>
        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("tngx")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-TNGX.png")}
          />
          {renderRadioButton("tngx")}
        </TouchableOpacity>
        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("tpkr")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-TPKR.png")}
          />
          {renderRadioButton("tpkr")}
        </TouchableOpacity>
        <TouchableOpacity
          style={gStyle.option}
          onPress={() => handleOptionChange("vcgt")}
        >
          <Image
            style={lStyle.imgPlate}
            source={require("../assets/pl-VCGT.png")}
          />
          {renderRadioButton("vcgt")}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const lStyle = StyleSheet.create({
  imgPlate: {
    width: 90,
    height: 75,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingTop: 30,
  },
});
