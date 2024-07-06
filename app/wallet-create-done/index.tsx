import StepBar from "@/components/step-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LoveImage from "@/assets/images/love.png";
import Button from "@/components/button";

const WalletCreateDone = () => {
  return (
    <View className="flex-1 p-4 gap-y-3">
      <StepBar currentStep={3} totalSteps={3} />
      <View className="flex-1 px-6 space-y-2">
        <Image
          source={LoveImage}
          className="w-full h-[120px]"
          resizeMode="contain"
        />
        <Text className="text-lg font-semibold">Congratulations</Text>
        <Text className="text-slate-500 text-sm">
          you've successfully protexted your wallet. Remember to keep your seed
          phrase safe, it's your responsibility!
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text className="font-semibold text-blue-700 underline">
            Leave yourself a hint?
          </Text>
        </TouchableOpacity>
        <Text>
          <Text className="text-slate-500 text-sm ">
            Cryptooly cannot recover your wallet should you lose it. You can
            find your seedphrase in
          </Text>
          <Text className="text-sm font-semibold">
            {" Setting > Security & Privacy"}
          </Text>
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text className="font-semibold text-blue-700 underline">
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
      <Button label="Continue" />
    </View>
  );
};

export default WalletCreateDone;
