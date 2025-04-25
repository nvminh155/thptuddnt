import { Icon, ListIcon, StarIcon, UserIcon } from "@/components/ui/icon";
import { Drawer } from "expo-router/drawer";

export default function THLab2Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="contacts" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "List",
          title: "Contacts",
          drawerIcon: ({ color }) => (
            <Icon
              as={ListIcon}
              color={color}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="favorite" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Favorites",
          title: "Favorites",
          drawerIcon: ({ color }) => (
            <Icon
              as={StarIcon}
              color={color}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="user" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "User",
          drawerIcon: ({ color }) => (
            <Icon
              as={UserIcon}
              color={color}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
    </Drawer>
  );
}
