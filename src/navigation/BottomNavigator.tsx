import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InventoryScreen from "../screens/InventoryScreen/InventoryScreen";
import {
  RootTabParamList,
  RootTabScreenProps,
} from "./types";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { TabBarIcon } from "../components/TabBarIcon";
import  FallbackScreen  from "./FallBackScreen";


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 const tabBarLabelStyle = { fontFamily: fonts.regular, fontSize: 10 };
const BottomTabNavigator:React.FC = () => {
   return (
     <BottomTab.Navigator
       initialRouteName="Inventory"
       screenOptions={{
         tabBarActiveTintColor: colors.mainBlue,
         headerShown: false,
       }}
     >
       <BottomTab.Screen
         name="Home"
         component={FallbackScreen}
         options={({ navigation }: RootTabScreenProps<"Home">) => ({
           tabBarLabelStyle,
           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
         })}
       />
       <BottomTab.Screen
         name="Insurance"
         component={FallbackScreen}
         options={({ navigation }: RootTabScreenProps<"Insurance">) => ({
           tabBarLabelStyle,
           tabBarIcon: ({ color }) => (
             <TabBarIcon name="umbrella" color={color} />
           ),
         })}
       />
       <BottomTab.Screen
         name="Inventory"
         component={InventoryScreen}
         options={({ navigation }: RootTabScreenProps<"Inventory">) => ({
           tabBarLabelStyle,
           tabBarIcon: ({ color }) => <TabBarIcon name="albums" color={color} />,
         })}
       />
       <BottomTab.Screen
         name="Realty"
         component={FallbackScreen}
         options={({ navigation }: RootTabScreenProps<"Realty">) => ({
           tabBarLabelStyle,
           tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
         })}
       />
       <BottomTab.Screen
         name="Menu"
         component={FallbackScreen}
         options={({ navigation }: RootTabScreenProps<"Menu">) => ({
           tabBarLabelStyle,
           tabBarIcon: ({ color }) => <TabBarIcon name="menu" color={color} />,
         })}
       />
     </BottomTab.Navigator>
   );
 }
 

 export default BottomTabNavigator;