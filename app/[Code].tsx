import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CodePage() {
  const { Code } = useLocalSearchParams();

  return (
    <View>
      <Text>Ola mundo {Code} </Text>
    </View>
  );
}
