import { Image, Text, View } from "react-native";
import GearImg from "../../assets/images/gear.png";
import Button from "@/components/button";
import { router } from "expo-router";

const Onboarding = () => {
  const gotoCreateWallet = () => {
    router.push("/wallet-create");
  };
  return (
    <View className="flex-1 justify-center p-[24px] gap-2">
      <Image
        source={GearImg}
        className="w-full h-[270px]"
        resizeMode="contain"
      />
      <Text className="text-[48px] text-left ">Wallet Setup</Text>
      <Text className="text-[18px]">
        Import an existing wallet or create a new one
      </Text>
      <Button
        label="Create A New Wallet"
        mode="primary"
        containerClassname="mt-6"
        onPress={gotoCreateWallet}
      />
    </View>
  );
};

export default Onboarding;
