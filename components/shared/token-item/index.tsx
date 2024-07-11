import { TokenType } from "@/components/separate/home/list-token/Tokens";
import { Feather } from "@expo/vector-icons";
import classNames from "classnames";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

const TokenItem = (token: TokenType) => {
  const isUp = token.changes >= 0;

  return (
    <View
      className="w-full flex-row bg-white h-[60px] items-center rounded-lg px-3 space-x-3 "
      key={token.id}
    >
      <View className="bg-slate-400 rounded-full h-[40px] w-[40px] justify-center items-center">
        <Image source={{ uri: token.icon }} style={{ width: 24, height: 24 }} />
      </View>
      <View className="flex-1">
        <Text className="text-base font-medium ">{token.name}</Text>
        <Text className="text-slate-500">{token.totalInUsd}</Text>
      </View>
      <View>
        <Text>{token.totalInCrypto}</Text>
        <View className="flex-row justify-end items-center gap-x-1">
          <Feather
            name={isUp ? "trending-up" : "trending-down"}
            size={12}
            color={isUp ? "green" : "red"}
          />
          <Text
            className={classNames(
              "text-right",
              isUp ? "text-green-500" : "text-red-500",
            )}
          >
            {token.changes}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TokenItem;
