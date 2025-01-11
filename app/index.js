import { React } from "react";
import { DataProvider } from "../ContextAPI/DataContext";
import MainStack from "../navigate";

export default function App() {
  return (
    <DataProvider>
      <MainStack />
    </DataProvider>
  );
}
