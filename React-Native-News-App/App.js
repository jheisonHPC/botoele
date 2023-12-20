import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getNews from "./api/getNews";
import LottieView from "lottie-react-native";
import AppNavigator from "./navigation/AppNavigation";
import { ClerkProvider } from "@clerk/clerk-expo";
import SignUpScreen from "./screens/signup";

export default function App() {
  
  return 

  <ClerkProvider publishableKey="pk_test_c291bmQta2l0ZS0zMy5jbGVyay5hY2NvdW50cy5kZXYk">
<SignedIn>
      <AppNavigator />
        </SignedIn>
        <SignedOut>
          <SignUpScreen />
        </SignedOut>     
  </ClerkProvider>
;
}
