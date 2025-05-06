import { ThemeProvider } from "@/contexts/theme-context";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{
        headerShown: false
      }} />
    </ThemeProvider>
  );
};

export default Layout;
