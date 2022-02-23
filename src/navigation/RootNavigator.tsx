import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddItemScreen from "../screens/AddItemScreen";
import {
  RootStackParamList,
} from "./types";
import BottomTabNavigator from "./BottomNavigator";
import { NotFound } from "./NotFound";


const Stack = createNativeStackNavigator<RootStackParamList>();


const RootNavigator:React.FC = () =>
{
      return (
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFound}
          options={{ title: "Oops!" }}
        />
        <Stack.Group
          screenOptions={{ presentation: "modal", headerShown: false }}
        >
          <Stack.Screen name="AddItem" component={AddItemScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
}

export default RootNavigator;

