import { Image, Text, View } from "react-native";
import GearImg from "../../assets/images/gear.png";

const Onboarding = () => {
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
    </View>
  );
};

export default Onboarding;
