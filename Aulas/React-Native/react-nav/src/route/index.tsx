import { NavigationContainer } from "@react-navigation/native";

// Contexto
import { StackRoutes } from "./stack.routes";
import { BottomTabsRoutes } from "./bottom-tabs.routes";
import { DrawerRoutes } from "./drawer.routes";

// Caixa de contextos
export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
