import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { useRouter } from "expo-router";

type StepbarProps = {
  currentStep?: number;
  totalSteps?: number;
  onClose?: () => void;
};

const StepBar = ({
  currentStep = 1,
  totalSteps = 1,
  onClose,
}: StepbarProps) => {
  const percentage = ((currentStep / totalSteps) * 100)?.toFixed() + "%";

  const router = useRouter();
  return (
    <View className="w-full h-[44px] flex-row items-center gap-x-3">
      <TouchableOpacity
        onPress={() => {
          if (onClose) {
            onClose();
            return;
          }

          router.back();
        }}
      >
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      <View className="flex-1 max-w-fit">
        <View
          className={classNames("h-2 bg-black rounded-[100px]")}
          style={{
            width: percentage,
          }}
        />
      </View>
      <Text className="font-bold text-xs">
        {currentStep}/{totalSteps}
      </Text>
    </View>
  );
};

export default StepBar;
