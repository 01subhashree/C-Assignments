// HomePage.js
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(null);

  // const fetchUserDetails = async () => {
  //   try {
  //     // Get the access token from offline storage.
  //     const accessToken = await AsyncStorage.getItem("accessToken");

  //     // Make an authenticated API request to fetch user details.
  //     const response = await fetch("https://fakeapi.platzi.com/en/rest/user", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const data = await response.json();

  //     setUserDetails(data);
  //   } catch (error) {
  //     console.error("Fetch user details error:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserDetails();
  // }, []);

  return (
    <View>
      <Text>Welcome to the Home Page</Text>
      {/* {userDetails && (
        <View>
          <Text>User Details:</Text>
          <Text>Email: {userDetails.email}</Text>
        </View>
      )} */}
      <Button
        title="Add Task"
        onPress={() => navigation.navigate("TodoList")}
      />
      <Button title="Logout" onPress={() => navigation.navigate("LoginPage")} />
    </View>
  );
};

export default HomePage;
