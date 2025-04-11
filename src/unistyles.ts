import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native-unistyles";

type AppThemes = { light: typeof DefaultTheme; dark: typeof DarkTheme };

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: { light: DefaultTheme, dark: DarkTheme },
  settings: { adaptiveThemes: true },
});
