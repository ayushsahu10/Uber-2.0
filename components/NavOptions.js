import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

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
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.Image }}
            />
            <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default navOptions;
