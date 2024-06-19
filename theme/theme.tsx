export const Colors = {
  black: "#000000",
  primary_1: "#F5FA80",
};

type ITheme = {
  dark: boolean;
  colors: IColor;
};
type IColor = {
  primary_1: string;
  button_bg_primary: string;
};
export const LightThemeCustome: ITheme = {
  dark: false,
  colors: {
    primary_1: Colors.primary_1,
    button_bg_primary: Colors.primary_1,
  },
};

export const DarkThemeCustome: ITheme = {
  dark: true,
  colors: {
    primary_1: Colors.primary_1,
    button_bg_primary: Colors.primary_1,
  },
};
