import { StyleSheet } from "react-native";

export const stylesTolTap = StyleSheet.create({
  text: {
    fontSize: 26,
  },
  wrapInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    backgroundColor: "white",
  },
  titleInput: {
    width: "46%",
    paddingLeft: 10,
    backgroundColor: "rgb(245, 241, 241)",
  },
  dropBox: {
    position: "absolute",
    backgroundColor: "white",
    width: "48%",
    right: "5%",
    borderRadius: 5,
    marginTop: 2,
  },
  boxAcordeon: {
    flexDirection: "row",
    width: "54%",
    justifyContent: "space-around",
  },
  chooseOpcion: {
    backgroundColor: "white",
    paddingRight: 85,
  },
  chooseHoleShaft: {
    paddingRight: 50,
  },
  // arrowAcordeon: {
  //   width: 50,
  //   marginLeft: 80,
  //   paddingLeft: 12,
  // },
  textBox: {
    fontSize: 24,
    paddingLeft: 32,
  },
  select: {
    backgroundColor: "rgb(95, 245, 31)",
    borderRadius: 5,
  },
  input: {
    width: "48%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
  },
});
