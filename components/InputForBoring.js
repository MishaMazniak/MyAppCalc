import React, { useContext } from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, View } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function InputForBoring({ setValueFromInput }) {
  const { t, i18n } = useTranslation();
  const { contextInput } = useContext(DataContext);
  const { contextCatalogBoring } = useContext(DataContext);
  return (
    <SafeAreaView>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>D</Text>
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
        <Text style={gStyle.inputText}>d</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("D", Math.abs(parseFloat(value)))
          }
        />
        <Text style={gStyle.inputText}>{t("mm")}</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>L</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("L", Math.abs(parseFloat(value)))
          }
        />
        <Text style={gStyle.inputText}>{t("mm")}</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>Vc</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="decimal-pad"
          onChangeText={(value) =>
            setValueFromInput("Vc", Math.abs(parseFloat(value)))
          }
          placeholder={
            contextInput.d ? String(contextCatalogBoring.vc_Min) : undefined
          }
        />
        <Text style={gStyle.inputText}>{t("mMin")}</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>f</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("f", Math.abs(parseFloat(value)))
          }
          placeholder={
            contextInput.d ? String(contextCatalogBoring.f_Min) : undefined
          }
        />
        <Text style={gStyle.inputText}>{t("mmOb")}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
