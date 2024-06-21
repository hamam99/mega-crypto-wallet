import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";

type StepbarProps = {
  currentStep?: number;
  totalSteps?: number;
};

const StepBar = ({ currentStep = 1, totalSteps = 1 }: StepbarProps) => {
  const percentage = ((currentStep / totalSteps) * 100)?.toFixed() + "%";

  return (
    <View className="w-full h-[44px] flex-row items-center gap-x-3">
      <Ionicons name="close" size={24} color="black" />
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
