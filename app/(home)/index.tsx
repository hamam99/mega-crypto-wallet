import AccountBar from "@/components/shared/account-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import AssetsTotal from "@/components/shared/assets-total";
import Menu from "@/components/separate/home/menu";
import ListToken from "@/components/separate/home/list-token";
import AccountModal, {
  AccountModalRef,
} from "@/components/separate/home/AccountModal";
import { useRef } from "react";

const Home = () => {
  const accountModalRef = useRef<AccountModalRef>(null);

  return (
    <View className="flex-1 p-[24px]">
      <View className="flex-row justify-between">
        <TouchableOpacity onPress={() => accountModalRef?.current?.openModal()}>
          <AccountBar
            name={"John Doe"}
            avatar={"https://picsum.photos/200/200"}
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-x-2 py-1">
          <Text>Etherium network</Text>
          <AntDesign name="down" size={8} color="black" />
        </TouchableOpacity>
      </View>
      <AssetsTotal />
      <Menu />
      <ListToken />
      <AccountModal ref={accountModalRef} />
    </View>
  );
};

export default Home;
