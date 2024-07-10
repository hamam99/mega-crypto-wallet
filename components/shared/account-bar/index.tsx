import { Text, View } from "react-native";
import AvatarDummy from "../../assets/images/avatar.png";
import blurhash from "@/constants/blurhash";
import { Image } from "expo-image";

type AccountBarProps = {
  avatar?: string;
  name?: string;
};

const AccountBar = ({ avatar, name }) => {
  return (
    <View className="flex-row items-center gap-x-1">
      <View className="bg-cyan-100 rounded-full w-[32px] h-[32px] justify-center items-center">
        <Image
          source={avatar}
          placeholder={{ blurhash: blurhash }}
          transition={1000}
          style={{
            width: 24,
            height: 24,
            borderRadius: 24,
          }}
        />
      </View>
      <Text className="font-black font-semibold text-[14px]">{name}</Text>
    </View>
  );
};

export default AccountBar;
