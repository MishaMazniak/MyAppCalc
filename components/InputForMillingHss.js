import React, { useContext } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function InputForMillingHss({ setValueFromInput }) {
  const { t, i18n } = useTranslation();
  const { contextInput } = useContext(DataContext);
  return (
    <>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>ap</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("ap", Math.abs(parseFloat(value)))
          }
          placeholder={contextInput.d ? String(contextInput.d) : undefined}
        />
        <Text style={gStyle.inputText}>{t("mm")}</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>ae</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("ae", Math.abs(parseFloat(value)))
          }
          placeholder={
            contextInput.d
              ? String((contextInput.d * 0.1).toFixed(1))
              : undefined
          }
        />
        <Text style={gStyle.inputText}>{t("mm")}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({});
