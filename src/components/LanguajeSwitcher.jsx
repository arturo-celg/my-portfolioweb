import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useTranslation } from "react-i18next";

function LanguageSwitcher(props) {
  const { i18n } = useTranslation();
  const value = i18n.language?.startsWith("en") ? "en" : "es";

  const handleChange = (_e, lng) => { if (lng) i18n.changeLanguage(lng); };

  return (
    <ToggleButtonGroup size="small" value={value} exclusive onChange={handleChange} aria-label="Language" {...props}>
      <ToggleButton value="es" aria-label="Español">ES</ToggleButton>
      <ToggleButton value="en" aria-label="English">EN</ToggleButton>
    </ToggleButtonGroup>
  );

}
export default LanguageSwitcher;