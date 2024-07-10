import classNames from "classnames";
import { Text, TouchableOpacity, View } from "react-native";
import Tokens from "./Tokens";
import { Component, useState } from "react";
import Collectibles from "./Collectibles";
import Button from "@/components/shared/button";
import { Feather } from "@expo/vector-icons";

const ListToken = () => {
  const TABS = [
    {
      name: "Tokens",
      id: "0",
      component: <Tokens />,
    },
    {
      name: "Collectibles",
      id: "1",
      component: <Collectibles />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <View className="flex-1">
      <View className="flex-row gap-2 py-2">
        {TABS.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setActiveTab(index);
              }}
              className={classNames(
                "mr-1 px-2",
                activeTab === index ? "border-b-2 border-black " : null,
              )}
            >
              <Text className={classNames("text-black font-semibold text-lg")}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {TABS[activeTab].component}
    </View>
  );
};

export default ListToken;
