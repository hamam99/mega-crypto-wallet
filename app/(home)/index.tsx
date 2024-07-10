import AccountBar from "@/components/shared/account-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AssetsTotal from "@/components/shared/assets-total";
import Menu from "@/components/separate/home/menu";
import ListToken from "@/components/separate/home/list-token";

const Home = () => {
  return (
    <View className="flex-1 p-[24px]">
      <View className="flex-row justify-between">
        <AccountBar
          name={"John Doe"}
          avatar={"https://picsum.photos/200/200"}
        />
        <TouchableOpacity className="flex-row items-center gap-x-2 py-1">
          <Text>Etherium network</Text>
          <AntDesign name="down" size={8} color="black" />
        </TouchableOpacity>
      </View>
      <AssetsTotal />
      <Menu />
      <ListToken />
    </View>
  );
};

export default Home;
