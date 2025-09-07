import { createStackNavigator } from "@react-navigation/stack";

import GallaryScreen from "../screens/GalleryScreen";
import HomeScreen from "../screens/HomeScreen";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Main menu",
          headerTintColor: "blue",
          headerShown: false,
        }}
      />
      <Screen name="gallery" component={GallaryScreen} />
    </Navigator>
  );
}
