import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { storeTokens } from "../utility";
import { fetchAccessToken, fetchRefreshToken } from "../utility";

const LoginPage = ({ navigation }) => {
  // Pass the 'navigation' prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    navigation.navigate("HomePage");
    // try {
    //   // const accessToken = await fetchAccessToken();
    //   const refreshToken = await fetchRefreshToken();

    //   // console.log("accessToken", accessToken);
    //   console.log("refreshToken", refreshToken);
    //   // if (accessToken && refreshToken) {
    //   //   storeTokens(accessToken, refreshToken);
    //   //   navigation.navigate("Home");
    //   // } else {
    //   //   console.error("Login failed. Access token or refresh token missing.");
    //   // }
    // } catch (error) {
    //   console.error("Login failed:", error);
    // }
  };

  return (
    <View>
      <Text>Hello user</Text>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password :</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;
