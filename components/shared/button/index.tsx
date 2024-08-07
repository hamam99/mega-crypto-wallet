import classNames from "classnames";
import { Text, TouchableOpacity } from "react-native";

type IMode = "primary" | "secondary";
type ButtonProps = {
  label?: string;
  onPress?: () => void;
  mode?: IMode;
  disabled?: boolean | undefined;
  containerClassname?: string;
  labelClassname?: string;
  leftIcon?: any;
};

const Button = ({
  label,
  onPress = () => {},
  containerClassname,
  labelClassname,
  mode = "primary",
  disabled,
  leftIcon,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={classNames(
        "rounded-lg w-full h-[56px] justify-center items-center flex-row",
        getContainerTheme(mode),
        containerClassname,
        disabled && "bg-slate-400",
      )}
      disabled={disabled}
    >
      {leftIcon && leftIcon}
      <Text
        className={classNames(
          "text-base font-bold",
          getLabelTheme(mode),
          labelClassname,
          disabled && "text-slate-200",
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

const getContainerTheme = (mode: IMode = "primary") => {
  switch (mode) {
    case "secondary":
      return classNames(`bg-slate-300`);
    default:
      return classNames(`bg-black`);
  }
};

const getLabelTheme = (mode: IMode = "primary") => {
  switch (mode) {
    case "secondary":
      return classNames(`text-black]`);
    default:
      return classNames("text-yellow-300");
  }
};
