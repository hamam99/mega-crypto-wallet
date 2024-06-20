export const Colors = {
  black: "#020202",
  primary_1: "#F5FA80",
  secondary_1: "#AAAAA",
};

type ITheme = {
  dark: boolean;
  colors: IColor;
};

export type IColor = {
  primary_1: string;
  button_bg_primary: string;
  button_label_primary: string;
  button_bg_secondary: string;
  button_label_secondary: string;
};

export const LightThemeCustome: ITheme = {
  dark: false,
  colors: {
    primary_1: Colors.primary_1,
    button_bg_primary: Colors.black,
    button_label_primary: Colors.primary_1,
    button_bg_secondary: Colors.secondary_1,
    button_label_secondary: Colors.black,
  },
};

export const DarkThemeCustome: ITheme = {
  dark: true,
  colors: {
    primary_1: Colors.primary_1,
    button_bg_primary: Colors.black,
    button_label_primary: Colors.primary_1,
    button_bg_secondary: Colors.secondary_1,
    button_label_secondary: Colors.black,
  },
};
