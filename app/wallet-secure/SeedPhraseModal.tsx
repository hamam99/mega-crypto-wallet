import React, {
  Ref,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { View, Text } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Button from "@/components/shared/button";

export interface SeedPhraseModalProps {}
export type SeedPhraseModalRef = {
  openModal: () => void;
};

const SeedPhraseModal = (
  props: SeedPhraseModalProps,
  ref: Ref<SeedPhraseModalRef>,
) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      bottomSheetRef?.current?.expand();
      bottomSheetRef?.current?.snapToIndex(2);
    },
    closeModal: () => {
      bottomSheetRef?.current?.close();
    },
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["1%", "50%", "75%", "90%"]}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
      )}
      backgroundStyle={{}}
      style={{
        padding: 16,
        gap: 12,
      }}
    >
      <View className="flex-1 ">
        <Text className="text-[18px] font-bold">What is a 'Seed phrase'</Text>
        <View className="gap-2">
          <Text className="text-base text-gray-400">
            A seed phrase is a set of twelve words that contains all the
            information about your wallet, including your funds. It's like a
            secret code used to access your entire wallet.
          </Text>
          <Text className="text-base text-gray-400">
            You must keep your seed phrase secret and safe. If someone gets your
            seed phrase, they'll gain control over your accounts.
          </Text>
          <Text className="text-base text-gray-400">
            Save it in a place where only you can access it. If you lose it, not
            even Cryptooly can help you recover it.
          </Text>
        </View>

        <Button
          label="I Got It"
          onPress={() => bottomSheetRef?.current?.close()}
          containerClassname="mt-4"
        />
      </View>
    </BottomSheet>
  );
};
export default forwardRef(SeedPhraseModal);
