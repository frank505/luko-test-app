/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";



const Navigation:React.FC = () =>
{
  return (
        <NavigationContainer theme={DefaultTheme}>
          <RootNavigator />
        </NavigationContainer>
      );
}


export default Navigation;

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */









