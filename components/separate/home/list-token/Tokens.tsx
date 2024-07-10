import classNames from "classnames";
import { Image } from "expo-image";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import TokenItem from "@/components/shared/token-item";

export type TokenType = {
  id: number;
  name: string;
  totalInCrypto: string;
  totalInUsd: string;
  changes: number;
  icon: string;
};

const Tokens = () => {
  const list: TokenType[] = [
    {
      id: 1,
      name: "Ethereum",
      totalInCrypto: "2.5123 ETH",
      totalInUsd: "$ 2,512.3",
      changes: 4.06,
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/768px-Ethereum-icon-purple.svg.png",
    },
    {
      id: 2,
      name: "Binance",
      totalInCrypto: "11.41 ETH",
      totalInUsd: "$ 225",
      changes: 3.38,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUVKGRaFqEJG8l94RShvOHR-F6jMpPBD4TQ&s",
    },
    {
      id: 3,
      name: "Neo",
      totalInCrypto: "28.123 NEO",
      totalInUsd: "$ 38",
      changes: -88.8,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEzES9ycJhLhhBprH6T-T0uiUEfZTyth2Sg&s",
    },
  ];
  return (
    <View className="">
      <FlatList
        data={list}
        style={{}}
        contentContainerStyle={{
          gap: 8,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TokenItem {...item} />}
      />
    </View>
  );
};

export default Tokens;
