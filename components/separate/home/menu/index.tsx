import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Menu = () => {
  const LIST_MENU = [
    {
      id: 1,
      label: "Send",
      icon: "send",
      destinationScreen: "(home)",
    },
    {
      id: 2,
      label: "Receive",
      icon: "download-cloud",
      destinationScreen: "(home)",
    },
    {
      id: 3,
      label: "Buy",
      icon: "shopping-cart",
      destinationScreen: "(home)",
    },
  ];
  return (
    <View className="flex-row justify-between py-2">
      {LIST_MENU.map((item) => {
        return (
          <TouchableOpacity
            key={item.id}
            className="flex-row items-center justify-between bg-emerald-200 py-3 px-3 rounded-lg gap-x-1"
          >
            <Feather name={item.icon} size={16} color="black" />
            <Text className="font-semibold">{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Menu;
