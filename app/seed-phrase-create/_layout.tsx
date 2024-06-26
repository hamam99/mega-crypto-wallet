import Button from "@/components/button";
import StepBar from "@/components/step-bar";
import classNames from "classnames";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type SeedPhraseCreateProps = {};
const RANDOM_WORDS = [
  "output",
  "band",
  "house",
  "ceiling",
  "he",
  "hilarious",
  "notice",
  "danger",
  "boy",
  "federation",
  "infect",
  "lily",
  "bake",
  "variant",
  "location",
  "crowd",
  "mosaic",
  "tenant",
  "sweater",
  "am",
  "banner",
  "outer",
  "whole",
  "voter",
  "skate",
  "officer",
  "to",
  "traction",
  "fever",
  "guerrilla",
];

function getRandomWords(numWords: number) {
  const selectedWords = [];

  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * RANDOM_WORDS.length);
    selectedWords.push(RANDOM_WORDS[randomIndex]);
  }

  return selectedWords;
}

const NUMBER_OF_PHRASE = 3;
const twelveRandomWords = getRandomWords(12);

const SeedPhraseCreate = (props: SeedPhraseCreateProps) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  return (
    <View className="flex-1 p-4 gap-y-3">
      <StepBar currentStep={2} totalSteps={3} />
      <Text className="font-bold text-[18px]">Create Your Seed Phrase</Text>
      <View className="flex-1 pb-3">
        <View className="bg-white rounded-lg p-3">
          <Text className="text-gray-400">
            Select each word in the order it was presented to you
          </Text>
          <View className="w-full h-fit flex flex-row space-x-1 py-4 ">
            {Array(NUMBER_OF_PHRASE)
              .fill("")
              .map((word, index) => {
                const selected = selectedWords?.[index];
                return (
                  <TouchableOpacity
                    key={index}
                    className={classNames(
                      "flex-1 h-[40px] justify-center items-center  rounded-lg ",
                      selected
                        ? "bg-green-200 border-2 border-green-200"
                        : "bg-white border-2 border-dashed border-slate-300",
                    )}
                    onPress={() => {
                      const duplicate = [...selectedWords];
                      const filtered = duplicate.filter((w) => {
                        return w !== selected;
                      });
                      setSelectedWords(filtered);
                    }}
                  >
                    <Text
                      className={classNames("text-green-600")}
                      numberOfLines={1}
                    >
                      {selected}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>

        <FlatList
          data={twelveRandomWords}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className={classNames(
                "flex-1 bg-white h-[40px] rounded-lg justify-center my-1 px-2",
                selectedWords.includes(item)
                  ? "bg-slate-100 opacity-50"
                  : "bg-white",
              )}
              disabled={selectedWords.includes(item)}
              onPress={() => {
                if (selectedWords?.length < 3) {
                  setSelectedWords([...selectedWords, item]);
                }
              }}
            >
              <Text className="text-black " numberOfLines={1}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          numColumns={3}
          className="pt-4"
          columnWrapperStyle={{
            gap: 8,
          }}
        />
      </View>
      <Button
        label="Continue"
        disabled={selectedWords?.length <= 0}
        onPress={() => {}}
      />
    </View>
  );
};

export default SeedPhraseCreate;
