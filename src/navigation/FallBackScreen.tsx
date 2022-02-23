
import React from "react";
import { View } from "react-native";
import { Title } from "../components/Title";
import { colors } from "../theme/colors";
import {
  RootTabScreenProps,
} from "./types";

 const FallbackScreen:React.FC<RootTabScreenProps<"Inventory">>  = ( { route })=> 
{
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <Title>{route?.name}</Title>
    </View>
  );
};


export default FallbackScreen;