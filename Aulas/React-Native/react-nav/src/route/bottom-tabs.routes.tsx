import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="black" size={24} />
          ),
        }}
      />
      <Screen
        name="gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="view-gallery"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Navigator>
  );
}
