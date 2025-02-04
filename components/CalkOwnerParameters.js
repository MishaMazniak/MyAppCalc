import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function CalkOwnerParameters() {
  const { t, i18n } = useTranslation();
  const { namePage } = useContext(DataContext);
  const { contextInput } = useContext(DataContext);

  const [resultOwner, setResultOwner] = useState({
    s: 0,
    f: 0,
  });

  useEffect(() => {
    let s;
    let f;
    s = Math.floor((contextInput.Vc * 1000) / (Math.PI * contextInput.d));
    if (namePage === "Drilling" || namePage === "Boring") {
      f = Math.floor(s * contextInput.f);
    }
    if (namePage === "Milling") {
      f = Math.floor(s * contextInput.fz * contextInput.z);
    }
    s = isNaN(s) ? 0 : s;
    f = isNaN(f) ? 0 : f;

    setResultOwner({ s: s, f: f });
  }, [contextInput]);

  return (
    <View style={gStyle.container}>
      <Text style={gStyle.title}>{t("yourParameters")}</Text>
      <Text style={gStyle.text}>S = {resultOwner.s} ob/min</Text>
      <Text style={gStyle.text}>F = {resultOwner.f} mm/min</Text>
    </View>
  );
}
