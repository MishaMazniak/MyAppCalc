import React from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, View } from "react-native";
import { gStyle } from "../styles/styles";

export default function InputForMillingPlate({
  placeholderData,
  setValueFromInput,
}) {
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
          placeholder={placeholderData.d}
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
          placeholder={placeholderData.z}
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
          placeholder={placeholderData.Vcmin}
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
          placeholder={placeholderData.f}
        />
        <Text style={gStyle.inputText}>mm/z</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
