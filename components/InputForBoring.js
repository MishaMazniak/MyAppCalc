import React from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, View } from "react-native";
import { gStyle } from "../styles/styles";

export default function InputForBoring({ placeholderData, setValueFromInput }) {
  return (
    <SafeAreaView>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>D</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("D", Math.abs(parseFloat(value)))
          }
          placeholder={placeholderData.d}
        />
        <Text style={gStyle.inputText}>mm</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>d</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("d", Math.abs(parseFloat(value)))
          }
          placeholder={placeholderData.z}
        />
        <Text style={gStyle.inputText}>mm</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>L</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("L", Math.abs(parseFloat(value)))
          }
          placeholder={placeholderData.Vcmin}
        />
        <Text style={gStyle.inputText}>mm</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>Vc</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="decimal-pad"
          onChangeText={(value) =>
            setValueFromInput("Vc", Math.abs(parseFloat(value)))
          }
          placeholder={placeholderData.f}
        />
        <Text style={gStyle.inputText}>m/min</Text>
      </View>
      <View style={gStyle.inputGroup}>
        <Text style={gStyle.inputText}>f</Text>
        <TextInput
          style={gStyle.input}
          keyboardType="numeric"
          onChangeText={(value) =>
            setValueFromInput("f", Math.abs(parseFloat(value)))
          }
          placeholder={placeholderData.ap}
        />
        <Text style={gStyle.inputText}>mm/ob</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});