// TodoList.js
import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, Picker } from "react-native";

const TodoList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [newTaskName, setNewTaskName] = useState(""); // State for new task name
  const [newSubtaskName, setNewSubtaskName] = useState(""); // State for new subtask name
  const [newSubtaskStatus, setNewSubtaskStatus] = useState("TO DO"); // State for new subtask status

  const addTask = () => {
    if (newTaskName) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          todoId: Math.random().toString(),
          todoName: newTaskName,
          status: "TO DO",
          subtasks: [],
        },
      ]);
      setNewTaskName(""); // Clear the input field
    }
  };

  const addSubtask = (task) => {
    if (newSubtaskName) {
      task.subtasks.push({
        subtaskId: Math.random().toString(),
        subtaskName: newSubtaskName,
        status: newSubtaskStatus,
      });
      setNewSubtaskName(""); // Clear the input field
      setTasks([...tasks]); // Update the state to trigger a re-render
    }
  };

  const updateTaskStatus = (task) => {
    // Check if all subtasks are completed
    const allSubtasksCompleted = task.subtasks.every(
      (subtask) => subtask.status === "completed"
    );

    // Update the task status
    task.status = allSubtasksCompleted ? "completed" : "IN PROGRESS";
    setTasks([...tasks]); // Update the state to trigger a re-render
  };

  return (
    <View>
      <Text>Welcome to the Todo List Page</Text>
      <TextInput
        placeholder="New Task Name"
        value={newTaskName}
        onChangeText={setNewTaskName}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.todoId}
        renderItem={({ item }) => (
          <View>
            <Text>{item.todoName}</Text>
            <Text>Status: {item.status}</Text>
            <TextInput
              placeholder="Subtask Name"
              value={newSubtaskName}
              onChangeText={setNewSubtaskName}
            />
            <Picker
              selectedValue={newSubtaskStatus}
              onValueChange={(itemValue) => setNewSubtaskStatus(itemValue)}
            >
              <Picker.Item label="TO DO" value="TO DO" />
              <Picker.Item label="IN PROGRESS" value="IN PROGRESS" />
              <Picker.Item label="COMPLETED" value="COMPLETED" />
            </Picker>
            <Button title="Add Subtask" onPress={() => addSubtask(item)} />
            <FlatList
              data={item.subtasks}
              keyExtractor={(subtask) => subtask.subtaskId}
              renderItem={({ subtask }) => (
                <View>
                  <Text>{subtask.subtaskName}</Text>
                  <Text>Status: {subtask.status}</Text>
                </View>
              )}
            />
            <Button
              title="Update Task Status"
              onPress={() => updateTaskStatus(item)}
            />
          </View>
        )}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TodoList;
