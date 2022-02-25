import React from "react";
import { StyleSheet, Text, View,StyleProp } from "react-native";
import { fonts } from "../theme/fonts";
import AddButton from "./AddButton";
import { TitleParams } from "./types";

export const Title:React.FC<TitleParams> = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.children}</Text>
      {props.onButtonPress? <AddButton 
      testID={props.testID}
      onPress={props.onButtonPress} /> : null}
    </View>
  );
};

const styles:StyleProp<any> = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: 34,
    lineHeight: 42,
  },
  titleContainer: {
    width: "100%",
    height: 42,
    marginTop: 99,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
