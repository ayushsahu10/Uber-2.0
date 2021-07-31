import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    Image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },

  {
    id: "466",
    title: "Order food",
    Image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const navOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          // disabled={!origin}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.Image }}
            />
            <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
            {/* <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
              // caretrightoutlined
            /> */}

            {/* <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="rightcircletwotone"
              color="white"
              type="antdesign"
            />
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="rowing"
            /> */}
            {/* <Ionicons
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="md-checkmark-circle"
              size={32}
              color="white"
            /> */}
            <AntDesign
              style={tw`p-2  mt-4`}
              name="rightcircle"
              size={40}
              color="black"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default navOptions;
