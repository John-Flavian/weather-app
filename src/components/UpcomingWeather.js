import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground
} from "react-native";
import { Feather } from "@expo/vector-icons";

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

const Item = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dt_txt, min, max, condition } = props;
  console.log(condition);
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min} </Text>
      <Text style={styles.temp}>{max} </Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderedItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        // eslint-disable-next-line no-undef
        source={require("../../assets/upcoming-background.jpg")}
        style={styles.image}
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink"
  },
  temp: {
    color: "white",
    fontSize: 20
  },
  date: {
    color: "white",
    fontSize: 15
  },
  image: {
    flex: 1
  }
});

export default UpcomingWeather;
