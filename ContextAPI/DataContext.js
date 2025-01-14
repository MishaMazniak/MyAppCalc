import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [namePage, setNamePage] = useState("MainScreen");
  const [contextTypeTools, setContextTypeTools] = useState("toolhss");
  const [contextTypeMaterial, setContextTypeMaterial] = useState("steel");
  const [contextTypeProces, setContextTypeProces] = useState("roughing");
  const [contextTypePlate, setContextTypePlate] = useState("tngx");

  const [contextInput, setContextInput] = useState({
    d: 2,
    Vc: 0,
    f: 0,
    z: 0,
    ap: 0,
    ae: 0,
    D: 0,
    L: 0,
  });
  const [contextCatalog, setContextCatalog] = useState({
    Vcmin: 0,
    Vcmax: 0,
    f: 0,
  });
  const [contextCatalogPlate, setContextCatalogPlate] = useState({
    name: "",
    website: "",
    material: "",
    hardness: "",
    ap_Min: "",
    ap_Max: "",
    f_Min: "",
    f_Max: "",
    vc_Min: "",
    vc_Max: "",
    f: "",
  });
  const [contextResult, setContextResult] = useState({
    Smin: 0,
    Smax: 0,
    Fmin: 0,
    Fmax: 0,
  });
  const [contextCatalogBoring, setContextCatalogBoring] = useState({
    material: "",
    coefficient_L_d: "",
    vc_Min: "",
    vc_Max: "",
    R_plate: "",
    f_Min: "",
    f_Max: "",
    ap_Min: "",
    ap_Max: "",
  });

  return (
    <DataContext.Provider
      value={{
        namePage,
        setNamePage,
        contextInput,
        setContextInput,
        contextTypeTools,
        setContextTypeTools,
        contextTypeMaterial,
        setContextTypeMaterial,
        contextCatalog,
        setContextCatalog,
        contextResult,
        setContextResult,
        contextCatalogPlate,
        setContextCatalogPlate,
        contextTypeProces,
        setContextTypeProces,
        contextTypePlate,
        setContextTypePlate,
        contextCatalogBoring,
        setContextCatalogBoring,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
