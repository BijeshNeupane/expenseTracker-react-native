import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar
        barStyle="default" // iOS + Android
      />
      <ClerkProvider tokenCache={tokenCache}>
        <SafeScreen>
          <Slot />
        </SafeScreen>
      </ClerkProvider>
    </>
  );
}
