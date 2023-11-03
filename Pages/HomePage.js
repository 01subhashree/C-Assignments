// HomePage.js
import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocalData } from "../dataStore";

const HomePage = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(null);

  const [todos, setTodos] = useState([]);
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

  useEffect(() => {
    // fetchUserDetails();
    setTodos(getLocalData("TodoList"));
  }, [todos]);

  console.log("todos", todos);

  const todosTodo = todos.filter((todo) => todo.status === "TO DO");
  const todosInProgress = todos.filter((todo) => todo.status === "IN PROGRESS");
  const todosCompleted = todos.filter((todo) => todo.status === "COMPLETED");

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
      <View>
        <Text>Tasks:</Text>

        {/* Display tasks with status "TO DO" in a div */}
        <Text>To Do:</Text>
        {todosTodo && (
          <FlatList
            data={todosTodo}
            keyExtractor={(item) => item.todoId.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>Task: {item.todoName}</Text>
                <Button title="Delete" />
              </View>
            )}
          />
        )}

        {/* Display tasks with status "IN PROGRESS" in a div */}
        <Text>In Progress:</Text>
        {todosInProgress && (
          <FlatList
            data={todosInProgress}
            keyExtractor={(item) => item.todoId.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>Task: {item.todoName}</Text>
                <Button title="Delete" />
              </View>
            )}
          />
        )}

        {/* Display tasks with status "COMPLETED" in a div */}
        <Text>Completed:</Text>
        {todosCompleted && (
          <FlatList
            data={todosCompleted}
            keyExtractor={(item) => item.todoId.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>Task: {item.todoName}</Text>
                <Button title="Delete" />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default HomePage;
