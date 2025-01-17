import React, { useContext } from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, View } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

export default function InputForDrilling({
  placeholderData,
  setValueFromInput,
}) {
  const { contextInput } = useContext(DataContext);
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
        />
        <Text style={gStyle.inputText}>mm</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>Vc</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("Vc", Math.abs(parseFloat(value)))
          }
          placeholder={contextInput.d ? placeholderData.Vcmin : undefined}
        />
        <Text style={gStyle.inputText}>m/min</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>f</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="decimal-pad"
          onChangeText={(value) =>
            setValueFromInput("f", Math.abs(parseFloat(value)))
          }
          placeholder={contextInput.d ? placeholderData.f : undefined}
        />
        <Text style={gStyle.inputText}>mm/ob</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
