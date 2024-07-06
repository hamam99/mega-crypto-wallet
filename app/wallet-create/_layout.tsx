import { View } from "react-native";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <View className="flex-1">
      <Slot />
    </View>
  );
};

export default Layout;
