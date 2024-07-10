import InputPassword from "@/components/shared/input-password";
import StepBar from "@/components/shared/step-bar";
import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import Button from "@/components/shared/button";
import { useRouter } from "expo-router";

const WalletCreate = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSwitchEnabled, setSwitchEnabled] = useState(false);
  const toggleSwitch = () =>
    setSwitchEnabled((previousState) => !previousState);

  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => setIsChecked(!isChecked);

  const router = useRouter();

  const gotoSecureWallet = () => {
    router.navigate("/wallet-secure");
  };

  const isButtonDisabled = () => {
    if (!currentPassword || !confirmPassword) {
      return true;
    }
    if (currentPassword !== confirmPassword) {
      return true;
    }
    if (!isChecked) {
      return true;
    }
    return false;
  };

  return (
    <View className="flex-1 p-4 gap-y-3">
      <StepBar currentStep={1} totalSteps={3} />
      <View className="flex-1">
        <Text className="font-bold text-[18px]">Create Password</Text>
        <Text className="text-base text-slate-500">
          This password will unlock your Cryptooly wallet only on this service
        </Text>
        <View className="pt-3" style={{ gap: 12 }}>
          <InputPassword
            label="New password"
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <InputPassword
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <View className="flex flex-row items-center justify-between py-3">
          <Text className="text-[18px]">Sign in with Face ID?</Text>
          <Switch
            trackColor={{ false: "#000000", true: "#000000" }}
            thumbColor={isSwitchEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isSwitchEnabled}
          />
        </View>
        <View className="flex flex-row bg-blue-50 ">
          <Checkbox
            color={isChecked ? "black" : undefined}
            value={isChecked}
            onValueChange={toggleCheckbox}
            className="mr-2 mt-2"
          />
          <Text className="mr-4 mt-2 text-base">
            I under stand that Cryptooly cannot recover this password for me.
            <TouchableOpacity onPress={() => {}}>
              <Text className="mx-1 underline text-base font-semibold text-center items-center justify-center">
                Learn more
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <Button
        label="Create Password"
        onPress={gotoSecureWallet}
        disabled={isButtonDisabled()}
      />
    </View>
  );
};

export default WalletCreate;
