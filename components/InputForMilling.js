import React, { useContext } from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, View } from "react-native";
import { gStyle } from "../styles/styles";
import InputForMillingHss from "../components/InputForMillingHss";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function InputForMilling({ setValueFromInput }) {
  const { t, i18n } = useTranslation();
  const { contextInput } = useContext(DataContext);
  const { contextCatalog } = useContext(DataContext);
  const { contextTypeTools } = useContext(DataContext);
  const { contextCatalogPlate } = useContext(DataContext);
  return (
    <SafeAreaView>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>d</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("d", Math.abs(parseFloat(value)))
          }
          placeholder={contextInput.d ? String(contextInput.d) : undefined}
        />
        <Text style={gStyle.inputText}>{t("mm")}</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>z</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("z", Math.abs(parseFloat(value)))
          }
          placeholder={contextInput.d ? String(contextInput.z) : undefined}
        />
        <Text style={gStyle.inputText}>{t("pice")}</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>Vc</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("Vc", Math.abs(parseFloat(value)))
          }
          placeholder={
            contextInput.d && contextTypeTools !== "toolfolding"
              ? String(contextCatalog.Vcmin)
              : contextInput.d && contextTypeTools === "toolfolding"
              ? String(contextCatalogPlate.vc_Min)
              : undefined
          }
        />
        <Text style={gStyle.inputText}>{t("mMin")}</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>fz</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="decimal-pad"
          onChangeText={(value) =>
            setValueFromInput("fz", Math.abs(parseFloat(value)))
          }
          placeholder={
            contextInput.d && contextTypeTools !== "toolfolding"
              ? String(contextCatalog.f)
              : contextInput.d && contextTypeTools === "toolfolding"
              ? String(contextCatalogPlate.f_Min)
              : undefined
          }
        />
        <Text style={gStyle.inputText}>{t("mmZ")}</Text>
      </View>

      {contextTypeTools === "toolhss" && <InputForMillingHss />}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
