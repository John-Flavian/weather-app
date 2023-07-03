import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2023-06-10 06:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Clear"
      }
    ]
  },
  {
    dt_txt: "2023-06-10 10:00:00",
    main: {
      temp_max: 5.0,
      temp_min: 3.05
    },
    weather: [
      {
        main: "Clouds"
      }
    ]
  },
  {
    dt_txt: "2023-06-10 12:00:00",
    main: {
      temp_max: 2.34,
      temp_min: 1.02
    },
    weather: [
      {
        main: "Rain"
      }
    ]
  }
];

const UpcomingWeather = () => {
  const renderedItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        // eslint-disable-next-line no-undef
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderedItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue"
  },
  image: {
    flex: 1
  }
});

export default UpcomingWeather;
