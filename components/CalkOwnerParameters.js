import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

export default function CalkOwnerParameters() {
  const { namePage } = useContext(DataContext);
  const { contextInput } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);

  const [resultOwner, setResultOwner] = useState({
    s: 0,
    f: 0,
  });

  useEffect(() => {
    let s;
    let f;
    s = Math.floor((contextInput.Vc * 1000) / (Math.PI * contextInput.d));
    if (namePage === "Drilling") {
      f = Math.floor(s * contextInput.f);
    }
    if (namePage === "Milling" && contextTypeTools === "toolfolding") {
      f = Math.floor(s * contextInput.fz * contextInput.z);
    }
    s = isNaN(s) ? 0 : s;
    f = isNaN(f) ? 0 : f;

    setResultOwner({ s: s, f: f });
  }, [contextInput]);

  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>Obliczanie dla twoich Vc i f</Text>
      <Text style={gStyle.text}>S = {resultOwner.s} ob/min</Text>
      <Text style={gStyle.text}>F = {resultOwner.f} mm/min</Text>
    </View>
  );
}
