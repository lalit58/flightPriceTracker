import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchForm from "./src/components/SearchForm";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchForm />
      </SafeAreaView>
      <StatusBar style={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
});
