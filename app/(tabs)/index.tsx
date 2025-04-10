import CatComponent from "@/components/lab/lab1/Cat";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <CatComponent age={3} />
      {/* set props */}
    </SafeAreaView>
  );
}
