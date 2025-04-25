import {
  Icon,
  ListIcon,
  SettingsIcon,
  StarIcon,
  UserIcon,
} from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { router, Tabs } from "expo-router";

export default function THLab2Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      backBehavior="history"
    >
      <Tabs.Screen
        name="contacts"
        options={{
          title: "List",
          tabBarIcon: ({ color }) => (
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
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
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
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: ({ color }) => (
            <Icon
              as={UserIcon}
              color={color}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
          headerShown: true,
          headerTitle: () => null,
          headerRight: () => {
            return (
              <Pressable onPress={() => router.push("/thlab2/options")} className="mr-4">
                <Icon
                  as={SettingsIcon}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </Pressable>
            );
          },
        }}
      />
    </Tabs>
  );
}
