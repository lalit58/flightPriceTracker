import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FlightOptionItem from "./src/components/FlightOptionItem";
import { LinearGradient } from "expo-linear-gradient";
import dummyData from "./data.json";
import SearchForm from "./src/components/SearchForm";
import { useState } from "react";
const option1 = dummyData[10];
export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (data) => {
    setLoading(true);
    setItems([]);

    // get items form the backend
    // const response = await searchFlights(data);

    setItems(dummyData);
    setLoading(false);
  };
  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />

        <FlatList
          data={items}
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />
        {/* <FlightOptionItem flight={option1} /> */}
      </SafeAreaView>
      <StatusBar style={"auto"} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    // paddingBottom: 30,
  },
});
