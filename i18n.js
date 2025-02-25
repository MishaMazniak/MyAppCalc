import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./langth/en.json";
import ua from "./langth/ua.json";
import pl from "./langth/pl.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
    pl: { translation: pl },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
