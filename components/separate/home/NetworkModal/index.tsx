import { FlatList, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Ref, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { ModalRef } from "@/entities/ModalRef";
import { Networks } from "@/entities/Networks";

export interface NetworkModalProps {}

const MockNetwork: Networks[] = [
  {
    id: 1,
    name: "Ethereum Main Network",
  },
  {
    id: 2,
    name: "Lalimo Rubik",
  },
  {
    id: 3,
    name: "Neil Momo",
  },
];

const NetworkModal = (props: NetworkModalProps, ref: Ref<ModalRef>) => {
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

  const [selectedNetwork, setSelectedNetwork] = useState<Networks>(
    MockNetwork[0],
  );

  const onSelectNetwork = (account: Networks) => {
    setSelectedNetwork(account);
    setTimeout(() => {
      bottomSheetRef?.current?.close();
    }, 300);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["1%", "50%", "95%"]}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
      )}
      backgroundStyle={{
        backgroundColor: "#f1f5f9",
      }}
      style={{}}
    >
      <View className="px-5">
        <Text className="font-bold text-lg">Account</Text>
        <FlatList
          data={MockNetwork}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => onSelectNetwork(item)}
                className="flex-row items-center py-2 space-x-3"
              >
                <View className="w-[4px] h-[4px] rounded-full bg-red-600" />
                <Text className="text-sm text-slate-400 flex-1">
                  {item?.name}
                </Text>
                {selectedNetwork?.id === item?.id && (
                  <Feather name="check" size={20} color="green" />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </BottomSheet>
  );
};

export default forwardRef(NetworkModal);
