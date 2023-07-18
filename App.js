import React from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather) {
    console.log(weather);
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
