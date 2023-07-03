import React from "react";
import { StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

const IconText = (props) => {
  // eslint-disable-next-line react/prop-types
  const { iconColor, iconName, bodyText, bodyTextStyles } = props;
  const { container, textTheme } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  textTheme: {
    fontWeight: "bold"
  }
});

export default IconText;
