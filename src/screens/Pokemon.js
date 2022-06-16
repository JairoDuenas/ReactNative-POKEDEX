import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonApi, getPokemonDetailApi } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Estamos en un Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
