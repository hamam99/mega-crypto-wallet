import React, {
  Ref,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { View, Text } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Button from "@/components/button";
import Checkbox from "expo-checkbox";
import { notify } from "react-native-notificated";

export interface SkipAccountModalProps {}
export type SkipAccountModalRef = {
  openModal: () => void;
};

const SkipAccountModal = (
  props: SkipAccountModalProps,
  ref: Ref<SkipAccountModalRef>,
) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const toggleCheckbox = () => setIsChecked(!isChecked);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

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
      onChange={handleSheetChanges}
      snapPoints={["1%", "40%"]}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
      )}
      backgroundStyle={{}}
      style={{
        padding: 16,
        gap: 12,
      }}
    >
      <View className="flex-1 gap-y-3">
        <Text className="text-[18px] font-bold">Skip Account Security?</Text>
        <View className="flex flex-row">
          <Checkbox
            color={isChecked ? "black" : undefined}
            value={isChecked}
            onValueChange={toggleCheckbox}
            className="mr-2"
          />
          <Text>
            I understand that if i lose mt seed phrase i will not be able to
            access my wallet{" "}
          </Text>
        </View>
        <View className="flex-1 flex-row justify-between gap-x-2 pt-2">
          <View className="flex-1">
            <Button
              label="Secure Now"
              mode="secondary"
              onPress={() => {
                if (!isChecked) {
                  notify("error", {
                    params: {
                      title: "Error",
                      description: "Please check the checkbox to continue",
                    },
                  });
                  return;
                }
                bottomSheetRef?.current?.close();
              }}
            />
          </View>
          <View className="flex-1">
            <Button
              label="Skip"
              mode="primary"
              onPress={() => bottomSheetRef?.current?.close()}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};
export default forwardRef(SkipAccountModal);
