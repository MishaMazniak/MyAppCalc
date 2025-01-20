import React, { useContext } from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, View } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

export default function InputForMillingPlate({ setValueFromInput }) {
  const { contextInput } = useContext(DataContext);
  const { contextCatalogPlate } = useContext(DataContext);
  return (
    <SafeAreaView style={gStyle.main}>
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
        <Text style={gStyle.inputText}>mm</Text>
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
        <Text style={gStyle.inputText}>szt</Text>
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
            contextInput.d ? String(contextCatalogPlate.vc_Min) : undefined
          }
        />
        <Text style={gStyle.inputText}>m/min</Text>
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
            contextInput.d ? String(contextCatalogPlate.f_Min) : undefined
          }
        />
        <Text style={gStyle.inputText}>mm/z</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
