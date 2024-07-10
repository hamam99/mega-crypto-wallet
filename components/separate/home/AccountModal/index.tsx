import { FlatList, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Ref, forwardRef, useImperativeHandle, useRef, useState } from "react";
import InputPassword from "@/components/shared/input-password";
import Button from "@/components/shared/button";
import AccountBar from "@/components/shared/account-bar";
import { Feather } from "@expo/vector-icons";

export interface AccountModalProps {}
export type AccountModalRef = {
  openModal: () => void;
};

type Accounts = {
  id: number;
  name: string;
  avatar: string;
};

const MOCK_ACCOUNTS: Accounts[] = [
  {
    id: 1,
    name: "Queen Bee",
    avatar: "https://picsum.photos/seed/picsum/200/200",
  },
  {
    id: 2,
    name: "Lalimo Rubik",
    avatar: "https://picsum.photos/seed/picsum/200/200",
  },
  {
    id: 3,
    name: "Neil Momo",
    avatar: "https://picsum.photos/seed/picsum/200/200",
  },
];

const AccountModal = (props: AccountModalProps, ref: Ref<AccountModalRef>) => {
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

  const [selectedAccount, setSelectedAccount] = useState<Accounts>(
    MOCK_ACCOUNTS[0],
  );

  const onSelectAccount = (account: Accounts) => {
    setSelectedAccount(account);
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
          data={MOCK_ACCOUNTS}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => onSelectAccount(item)}
                className="flex-row items-center py-2  justify-between"
              >
                <AccountBar avatar={item?.avatar} name={item?.name} />
                {selectedAccount?.id === item?.id && (
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

export default forwardRef(AccountModal);
