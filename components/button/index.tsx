import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  mode: "primary" | "secondary";
  containerStyle?: StyleProp<ViewStyle> | undefined;
  labelStyle?: StyleProp<ViewStyle> | undefined;
};

const Button = ({
  label,
  onPress = () => {},
  containerStyle,
  labelStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={labelStyle}> {label}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    
  },
  label: {},
});
