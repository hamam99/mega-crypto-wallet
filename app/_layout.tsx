import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import useTheme from "@/theme/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNotifications } from "react-native-notificated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const { NotificationsProvider, useNotifications, ...events } =
    createNotifications();

  const { isDark } = useTheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className="flex-1">
          <NotificationsProvider />

          <Stack
            initialRouteName="(onboarding)"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(onboarding)" />
            <Stack.Screen name="wallet-create" />
            <Stack.Screen name="wallet-secure" />
            <Stack.Screen name="seed-phrase-create" />
            <Stack.Screen name="wallet-create-done" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
