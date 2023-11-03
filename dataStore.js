// const TodoList = [
//   {
//     userName: "subh@gmail.com",
//     id: 1234,
//     Todos: [
//       {
//         todoName: "Morning Work",
//         todoId: yfg7y48,
//         status: "completed",   [‘TO DO’, ‘IN PROGRESS’,’COMPLETED’]
//         subtask: [
//           {
//             subtaskName: "workingOut",
//             subtaskId: xhvhggd78w6781,
//             status: "completed",
//           },
//           {
//             subtaskName: "breakfst",
//             subtaskId: xhviauigd78w6781,
//             status: "completed",
//           },
//           {},
//         ],
//       },
//       {},
//     ],
//   },
//   {},
// ];

import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTasksToLocalStorage = async (tasks) => {
  try {
    const tasksJSON = JSON.stringify(tasks);
    await AsyncStorage.setItem("TodoList", tasksJSON);
  } catch (error) {
    console.error("Error saving tasks to local storage:", error);
  }
};

export const getTasksFromLocalStorage = async () => {
  try {
    const tasksJSON = await AsyncStorage.getItem("TodoList");
    if (tasksJSON) {
      return JSON.parse(tasksJSON);
    }
    return [];
  } catch (error) {
    console.error("Error getting tasks from local storage:", error);
    return [];
  }
};
