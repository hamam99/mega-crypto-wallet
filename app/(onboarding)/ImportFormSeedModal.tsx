import { Text, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Ref, forwardRef, useImperativeHandle, useRef, useState } from "react";
import InputPassword from "@/components/shared/input-password";
import Button from "@/components/shared/button";

export interface ImportFormSeedModalProps {}
export type ImportFormSeedModalRef = {
  openModal: () => void;
};
const ImportFormSeedModal = (
  props: ImportFormSeedModalProps,
  ref: Ref<ImportFormSeedModalRef>,
) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [seedPhrase, setSeedPhrase] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      bottomSheetRef?.current?.expand();
      bottomSheetRef?.current?.snapToIndex(1);
    },
    closeModal: () => {
      bottomSheetRef?.current?.close();
    },
  }));

  const isButtonDisabled = () => {
    if (!seedPhrase || !newPassword || !confirmPassword) {
      return true;
    }

    if (newPassword !== confirmPassword) {
      return true;
    }

    return false;
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["1%", "95%"]}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
      )}
      backgroundStyle={{
        backgroundColor: "#f1f5f9",
      }}
      style={{}}
    >
      <View className="flex-1 p-[16px] gap-y-2 bg-slate-100 ">
        <View className="flex-1">
          <Text className="text-lg font-bold mb-4">Import Form Seed</Text>
          <InputPassword
            placeholder="Seed Phrase"
            containerClassname="mt-2 border-1 border-solid border-black"
            onChangeText={(value) => setSeedPhrase(value)}
          />
          <InputPassword
            placeholder="New Password"
            containerClassname="mt-2"
            onChangeText={(value) => setNewPassword(value)}
          />
          <InputPassword
            placeholder="Confirm Password"
            containerClassname="mt-2"
            onChangeText={(value) => setConfirmPassword(value)}
          />
        </View>
        <Button
          label="Import"
          onPress={() => {}}
          disabled={isButtonDisabled()}
        />
      </View>
    </BottomSheet>
  );
};

export default forwardRef(ImportFormSeedModal);
