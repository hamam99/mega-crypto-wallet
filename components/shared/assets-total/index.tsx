import classNames from "classnames";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
const MockData = {
  TotalInCrypto: "4.8729 ETH",
  TotalInUSD: "$ 8,391",
  PercentageChange: 9.97,
};
const AssetsTotal = () => {
  const isUp = MockData.PercentageChange > 0;
  return (
    <View className="py-2">
      <Text className="text-lg">{MockData.TotalInCrypto}</Text>
      <View className="flex-row gap-x-4 space-4 ">
        <Text className="text-base text-slate-500">{MockData.TotalInUSD}</Text>
        <View className="flex-row items-center gap-x-1">
          <Feather
            name="trending-down"
            size={12}
            color={isUp ? "green" : "red"}
          />
          <Text
            className={classNames(
              "text-base",
              isUp ? "text-green-500" : "text-red-500",
            )}
          >
            {MockData.PercentageChange}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AssetsTotal;
