import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import AppNavigator from "./AppNavigator";
import { Alert, View } from "react-native";
import { initializeDb } from "dbClient";

SplashScreen.preventAutoHideAsync();

const RootNavigator: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setup = async () => {
      try {
        await initializeDb();
      } catch (error) {
        Alert.alert(
          "Initialization Error",
          "There was a problem initializing the app. Please try restarting the app. If the issue persists, consider reinstalling the app."
        );
      } finally {
        setIsReady(true);
      }
    };
    setup();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigator />
    </View>
  );
};

export default RootNavigator;
