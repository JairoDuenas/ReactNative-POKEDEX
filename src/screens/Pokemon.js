import { View, Text } from "react-native";
import React from "react";

export default function Pokemon(props) {
  const { navigation, route } = props;
  return (
    <View>
      <Text>Estamos en un Pokemon</Text>
    </View>
  );
}
