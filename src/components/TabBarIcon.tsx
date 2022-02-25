import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TabBarIconParams } from "./types";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */


 export  const TabBarIcon:React.FC<TabBarIconParams> = (props) =>
  {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }

