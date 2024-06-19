import { useColorScheme } from "react-native";
import { DarkThemeCustome, LightThemeCustome } from "./theme";
const useTheme = () => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const theme = isDark ? DarkThemeCustome : LightThemeCustome;
  return {
    isDark,
    theme,
  };
};

export default useTheme;
