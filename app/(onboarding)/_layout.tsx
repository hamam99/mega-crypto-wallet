import { Image, Text, View } from "react-native";
import GearImg from "../../assets/images/gear.png";
import Button from "@/components/button";
import { router } from "expo-router";
import ImportFormSeedModal, {
  ImportFormSeedModalRef,
} from "./ImportFormSeedModal";
import { useRef } from "react";

const Onboarding = () => {
  const refImportFormSeedModal = useRef<ImportFormSeedModalRef>(null);

  const gotoCreateWallet = () => {
    router.push("/wallet-create");
  };

  const openLoginModal = () => {
    refImportFormSeedModal?.current?.openModal();
  };

  return (
    <View className="flex-1 justify-center p-[24px] ">
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
        label="Import Using Seed Phare"
        mode="secondary"
        containerClassname="mt-6"
        onPress={openLoginModal}
      />
      <Button
        label="Create A New Wallet"
        mode="primary"
        containerClassname="mt-2"
        onPress={gotoCreateWallet}
      />
      <ImportFormSeedModal ref={refImportFormSeedModal} />
    </View>
  );
};

export default Onboarding;
