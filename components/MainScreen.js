import React, { useContext } from "react";
import { DataContext } from "../ContextAPI/DataContext";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Linking,
} from "react-native";
import { gStyle } from "../styles/styles";

export default function MainScreen({ navigation }) {
  const { setNamePage } = useContext(DataContext);
  const { setContextTypeProces } = useContext(DataContext);
  const { setContextInput } = useContext(DataContext);
  const { setContextTypeTools } = useContext(DataContext);
  const { setContextTypePlate } = useContext(DataContext);
  const { setContextTypeMaterial } = useContext(DataContext);
  const { setContextCatalog } = useContext(DataContext);
  const { setContextCatalogPlate } = useContext(DataContext);
  const { setContextCatalogBoring } = useContext(DataContext);
  const { setContextResult } = useContext(DataContext);

  const startCalc = (nameOpenedPage) => {
    navigation.navigate(nameOpenedPage);
    setNamePage(nameOpenedPage);
  };
  const handleEmailPress = () => {
    Linking.openURL("mailto:Mishamaznyak@gmail.com");
  };
  const handleLanguageChange = (lang) => {
    // setLanguage(lang);
  };
  useFocusEffect(
    React.useCallback(() => {
      setContextInput({ d: 0, Vc: 0, f: 0, z: 0, ap: 0, ae: 0, D: 0, L: 0 });
      setContextTypeTools("toolhss");
      // setContextTypeProces("roughing");
      // setContextTypePlate("tngx");
      // setContextTypeMaterial("steel");
      // setContextCatalog({ Vcmin: 0, Vcmax: 0, f: 0 });
      // setContextCatalogPlate({
      //   name: "tngx",
      //   website: "",
      //   material: "",
      //   hardness: "",
      //   ap_Min: "",
      //   ap_Max: "",
      //   f_Min: "",
      //   f_Max: "",
      //   vc_Min: "",
      //   vc_Max: "",
      //   f: "",
      // });
      // setContextCatalogBoring({
      //   material: "",
      //   coefficient_L_d: "",
      //   vc_Min: "",
      //   vc_Max: "",
      //   R_plate: "",
      //   f_Min: "",
      //   f_Max: "",
      //   ap_Min: "",
      //   ap_Max: "",
      // });
      // setContextResult({
      //   Smin: 0,
      //   Smax: 0,
      //   Fmin: 0,
      //   Fmax: 0,
      // });

      return () => {};
    }, [])
  );
  return (
    <ScrollView contentContainerStyle={gStyle.scrollContainer}>
      <View style={gStyle.main}>
        <View style={lStyles.languageContainer}>
          <Pressable
            style={lStyles.languageButton}
            onPress={() => handleLanguageChange("Ua")}
          >
            <Text style={lStyles.languageText}>Ua</Text>
          </Pressable>
          <Pressable
            style={lStyles.languageButton}
            onPress={() => handleLanguageChange("Pl")}
          >
            <Text style={lStyles.languageText}>Pl</Text>
          </Pressable>
          <Pressable
            style={lStyles.languageButton}
            onPress={() => handleLanguageChange("En")}
          >
            <Text style={lStyles.languageText}>En</Text>
          </Pressable>
        </View>
        <View style={lStyles.containerIcon}>
          <View style={lStyles.boxWrap}>
            <Text style={lStyles.textOverIcon}>Wiercenie</Text>
            <Pressable onPress={() => startCalc("Drilling")}>
              <Image
                style={lStyles.imgFromTitle}
                source={require("../assets/Drilling.png")}
              />
            </Pressable>
          </View>
          <View style={lStyles.boxWrap}>
            <Text style={lStyles.textOverIcon}>Frezowanie</Text>
            <Pressable onPress={() => startCalc("Milling")}>
              <Image
                style={lStyles.imgFromTitle}
                source={require("../assets/Milling.png")}
              />
            </Pressable>
          </View>
          <View style={lStyles.boxWrap}>
            <Text style={lStyles.textOverIcon}>Wytaczanie</Text>
            <Pressable onPress={() => startCalc("Boring")}>
              <Image
                style={lStyles.imgFromTitle}
                source={require("../assets/Tytle-wytaczdlo.png")}
              />
            </Pressable>
          </View>
          <View style={lStyles.boxWrap}>
            <Text style={lStyles.textOverIcon}>Tolerancji</Text>
            <Pressable onPress={() => startCalc("Tolerance")}>
              <Image
                style={lStyles.imgFromTitle}
                source={require("../assets/Tables.png")}
              />
            </Pressable>
          </View>
          <View style={lStyles.boxWrap}>
            <Text style={lStyles.textOverIcon}>Otwór pod gwint</Text>
            <Pressable onPress={() => startCalc("HoleOnderScrew")}>
              <Image
                style={lStyles.imgFromTitle}
                source={require("../assets/screw.jpeg")}
              />
            </Pressable>
          </View>
        </View>
        <Pressable onPress={handleEmailPress} style={lStyles.emailContainer}>
          <Text style={lStyles.emailText}>Mishamaznyak@gmail.com</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const lStyles = StyleSheet.create({
  containerIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  boxWrap: {
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgFromTitle: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "red",
  },
  textOverIcon: {
    fontSize: 30,
    color: "#fff",
    paddingBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  emailContainer: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
  },
  emailText: {
    fontSize: 12,
    color: "white",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  languageContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
  },
  languageButton: {
    backgroundColor: "#198754",
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  languageText: {
    color: "white",
    fontSize: 12,
  },
});
