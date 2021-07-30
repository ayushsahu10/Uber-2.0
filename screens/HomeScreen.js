import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import SafeViewAndroid from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={(SafeViewAndroid.GlobalStyles, [tw`bg-white`])}>
      {/* <Text style={tw`text-red-500`}>Home Screen</Text> */}
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});