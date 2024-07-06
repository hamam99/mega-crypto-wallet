import StepBar from "@/components/step-bar";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

import GuardImage from "../../assets/images/guard.png";
import Button from "@/components/button";
import { Link, useRouter } from "expo-router";
import SeedPhraseModal, { SeedPhraseModalRef } from "./SeedPhraseModal";
import { useRef } from "react";
import SkipAccountModal, { SkipAccountModalRef } from "./SkipAccountModal";

type WalletSecureProps = {};
const WalletSecure = (props: WalletSecureProps) => {
  const router = useRouter();
  const seedPhraseModalRef = useRef<SeedPhraseModalRef>(null);
  const skipAccountModalRef = useRef<SkipAccountModalRef>(null);

  return (
    <View className="flex-1 p-4 gap-y-3">
      <StepBar currentStep={2} totalSteps={3} />
      <View className="flex-1">
        <Text className="font-bold  text-[18px]">Secure your wallet</Text>
        <Image
          source={GuardImage}
          className="h-[190px] w-full items-center justify-center"
          resizeMode="contain"
        />
        <Text className="py-2 space-y-4 leading-6">
          <Text className="text-gray-600">
            Don't risk losing your funds. protect your wallet by saving your
          </Text>
          <Text
            className="text-black font-bold"
            onPress={() => seedPhraseModalRef?.current?.openModal()}
          >
            {" "}
            seed phrase
          </Text>
          <Text className="text-gray-600"> in a place you trust. </Text>
          <Text className="text-black">
            It's the only way to recover your wallet if you get locked out of
            the app or get a new device.
          </Text>
        </Text>
      </View>
      <View className="gap-y-2 ">
        <View>
          <Button
            label="Remind Me Later"
            mode="secondary"
            onPress={() => {
              skipAccountModalRef?.current?.openModal();
            }}
          />
        </View>
        <View>
          <Button
            label="Start"
            mode="primary"
            onPress={() => {
              router.navigate("/seed-phrase-create");
            }}
          />
        </View>
      </View>
      <SeedPhraseModal ref={seedPhraseModalRef} />
      <SkipAccountModal ref={skipAccountModalRef} />
    </View>
  );
};

export default WalletSecure;
