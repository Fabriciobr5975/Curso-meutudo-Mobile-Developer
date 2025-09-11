import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MainScreen from "../screens/MainScreen";
import ProjectScreen from "../screens/ProjectScreen";
import SkillScreen from "../screens/SkillScreen";

const { Screen, Navigator } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen
        name="Homepage"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="black" size={24} />
          ),
        }}
      />
      <Screen
        name="Projetos"
        component={ProjectScreen}
        options={{
          tabBarIcon: () => (
           <MaterialCommunityIcons name="bookshelf" size={24} color="black" />
          ),
        }}
      />
      <Screen
        name="Habilidades"
        component={SkillScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="chart-bar" size={24} color="black" />
          ),
        }}
      />
    </Navigator>
  );
}
