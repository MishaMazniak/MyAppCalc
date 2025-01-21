import React, { useContext } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { gStyle } from "../styles/styles";
import { DataContext } from "../ContextAPI/DataContext";

export default function InputForMillingHss({ setValueFromInput }) {
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
        <Text style={gStyle.inputText}>mm</Text>
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
        <Text style={gStyle.inputText}>mm</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({});
