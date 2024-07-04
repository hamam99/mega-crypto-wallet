import { Text, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Ref, forwardRef, useImperativeHandle, useRef } from "react";
import InputPassword from "@/components/input-password";

export interface ImportFormSeedModalProps {}
export type ImportFormSeedModalRef = {
  openModal: () => void;
};
const ImportFormSeedModal = (
  props: ImportFormSeedModalProps,
  ref: Ref<ImportFormSeedModalRef>,
) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      bottomSheetRef?.current?.expand();
      bottomSheetRef?.current?.snapToIndex(1);
    },
    closeModal: () => {
      bottomSheetRef?.current?.close();
    },
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["1%", "95%"]}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
      )}
      backgroundStyle={{}}
      style={{
        padding: 16,
        gap: 12,
      }}
    >
      <View className="flex-1">
        <Text className="text-lg font-bold">Import Form Seed</Text>
        <InputPassword placeholder="Seed Phrase" />
        <InputPassword placeholder="New Password" />
        <InputPassword placeholder="Confirm Password" />
      </View>
    </BottomSheet>
  );
};

export default forwardRef(ImportFormSeedModal);
