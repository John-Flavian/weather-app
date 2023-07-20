import React from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weather] = useGetWeather();
  //For debugging
  // console.log("Error:" + error);
  // console.log("loading:" + loading);
  // console.log(weather);

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"blue"} />
      ) : (
        <ErrorItem />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
