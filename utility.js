import AsyncStorage from "@react-native-async-storage/async-storage";
// import { sign } from "react-native-pure-jwt";
import { encode, decode } from "react-native-pure-jwt";

export async function getAccessToken() {
  try {
    const accessToken = await AsyncStorage.getItem("access_token");
    return accessToken;
  } catch (error) {
    console.error("Error while retrieving access token:", error);
  }
}

export async function getRefreshToken() {
  try {
    const refreshToken = await AsyncStorage.getItem("refresh_token");
    return refreshToken;
  } catch (error) {
    console.error("Error while retrieving refresh token:", error);
  }
}

export async function storeTokens(accessToken, refreshToken) {
  try {
    await AsyncStorage.setItem("access_token", accessToken);
    await AsyncStorage.setItem("refresh_token", refreshToken);
  } catch (error) {
    console.error("Error while storing tokens:", error);
  }
}

export async function fetchAccessToken() {
  try {
    const response = await fetch("https://fakeapi.platzi.com/auth/token");
    if (response.ok) {
      const data = await response.json();
      const accessToken = data.access_token;
      return accessToken;
    } else {
      console.error("Error while fetching access token");
    }
  } catch (error) {
    console.error("Error while fetching access token:", error);
  }
}
const secretKey = "your-secret-key";

// Define the payload with an expiration time (in seconds since the Unix epoch).
const payload = {
  data: "your-data",
  exp: Math.floor(Date.now() / 1000) + 3600, // Set expiration time to one hour from now
};

export async function fetchRefreshToken() {
  try {
    // const response = await fetch(
    //   "https://fakeapi.platzi.com/auth/refresh-token"
    // );
    // if (response.ok) {
    //   const data = await response.json();
    //   const refreshToken = data.refresh_token;
    //   return refreshToken;
    // } else {
    //   console.error("Error while fetching refresh token");
    // }

    // let response;
    // sign(
    //   {
    //     iss: "luisfelipez@live.com",
    //     exp: new Date().getTime() + 3600 * 1000, // expiration date, required, in ms, absolute to 1/1/1970
    //     additional: "payload",
    //   }, // body
    //   "my-secret", // secret
    //   {
    //     alg: "HS256",
    //   }
    // )
    //   .then((res) => (response = res)) // token as the only argument
    //   .catch(console.error); // possible errors
    // return response;

    return encode(payload, secretKey, "HS256");
  } catch (error) {
    console.error("Error while fetching refresh token:", error);
  }
}

export async function clearTokens() {
  try {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
  } catch (error) {
    console.error("Error while clearing tokens:", error);
  }
}
