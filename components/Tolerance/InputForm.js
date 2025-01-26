import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../ContextAPI/DataContext";

import ImputHoleShaft from "./ImputHoleShaft";
import ImputDiameter from "./ImputDiameter";
import ImputType from "./ImputType";
import ImputTolerance from "./ImputTolerance";

export default function InputForm() {
  const { setContextTolerance } = useContext(DataContext);

  const [dataInput, setDataInput] = useState({
    holeShaft: "Hole",
    type: "H",
    tolerance: "6",
    d: "",
  });
  const getDataInput = (name, value) => {
    setDataInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    setContextTolerance({
      holeShaft: dataInput.holeShaft,
      type: dataInput.type,
      tolerance: dataInput.tolerance,
      d: dataInput.d,
    });
  }, [dataInput]);
  return (
    <>
      <ImputHoleShaft getDataInput={getDataInput} />
      <ImputDiameter getDataInput={getDataInput} />
      <ImputType getDataInput={getDataInput} />
      <ImputTolerance getDataInput={getDataInput} />
    </>
  );
}
