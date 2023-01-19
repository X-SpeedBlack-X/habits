import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import Logo from "../assets/logo.svg";

export function Header() {
  const { navigate } = useNavigation();

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        activeOpacity={0.4}
        className="flex-row items-center border border-violet-500 px-4 h-11 rounded-lg"
        onPress={() => navigate("new")}
      >
        <Feather name="plus" size={20} color={colors.violet[500]} />
        <Text className="text-white font-semibold text-base ml-3">
          Novo hábito
        </Text>
      </TouchableOpacity>
    </View>
  );
}
