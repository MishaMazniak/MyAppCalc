import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
  main: {
    backgroundColor: "#198754",
    alignItems: "center",
    paddingBottom: 25,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: "white",
    fontSize: 25,
  },
  typeMaterial: {
    flexDirection: "row",
    alignItems: "center",
  },
  textWhite: {
    color: "white",
  },
  text: {
    color: "white",
    marginBottom: 10,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    width: "90%",
    backgroundColor: "#f0f9f1",
  },
  inputText: {
    fontSize: 18,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 8,
    flex: 1,
    fontSize: 18,
    backgroundColor: "white",
    alignItems: "left",
  },
  container: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  optionCenter: {
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
  },
  radioButtonOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 10,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "white",
  },
  imgArrowAcordion: {
    width: 30,
    height: 30,
  },
  accordionHeader: {
    width: "100%",
  },
  underLine: {
    width: "100%",
    height: 2,
    borderWidth: 1,
    borderColor: "white",
  },
  scrollContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
});
