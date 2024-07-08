import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import classNames from "classnames";

type InputPasswordProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  label?: string;
  error?: string;
  placeholder?: string;
  containerClassname?: string;
};

const InputPassword = ({
  value,
  onChangeText = () => {},
  secureTextEntry = false,
  label,
  error,
  placeholder,
  containerClassname,
}: InputPasswordProps) => {
  const [secureTextEntryLocal, setSecureTextEntryLocal] = useState(false);

  useEffect(() => {
    setSecureTextEntryLocal(secureTextEntry);
  }, [secureTextEntry]);
  return (
    <View className="">
      <View
        className={classNames(
          "w-full rounded-[4px] py-2 px-4 bg-white",
          containerClassname,
        )}
      >
        {label && <Text className="text-slate-400">{label}</Text>}
        <View className="flex-row items-center">
          <TextInput
            value={value}
            secureTextEntry={secureTextEntryLocal}
            onChangeText={onChangeText}
            className="flex-1 h-[40px]"
            placeholder={placeholder}
            placeholderTextColor={"#AFB4C0"}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureTextEntryLocal(!secureTextEntryLocal);
            }}
          >
            <Entypo
              name={secureTextEntryLocal ? "eye-with-line" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      {error && <Text className="text-red-500 text-xs px-3 py-1">{error}</Text>}
    </View>
  );
};

export default InputPassword;
