import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";

const Layout = () => {
  const [indexActiveTab, setIndexActiveTab] = useState(0);

  const listTabs = [
    {
      name: "index",
      label: "Wallet",
      icon: "wallet",
    },
    {
      name: "swap",
      label: "Swap",
      icon: "swap",
    },
    {
      name: "barcode",
      label: "Scan",
      icon: "scan1",
    },
    {
      name: "setting",
      label: "Setting",
      icon: "setting",
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          borderWidth: 0,
        },
      }}
    >
      {listTabs.map((item, index) => {
        const isActive = indexActiveTab === index;
        return (
          <Tabs.Screen
            key={index}
            name={item.name}
            options={{
              tabBarButton: (props) => (
                <TouchableOpacity
                  {...props}
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => setIndexActiveTab(index)}
                >
                  <AntDesign
                    name={item.icon}
                    size={24}
                    color={isActive ? "black" : "#666666"}
                  />
                  {isActive && (
                    <Text className="ml-1 font-semibold">{item.label}</Text>
                  )}
                </TouchableOpacity>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default Layout;
