import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("Task", () => {
  const taskList = ref([]);

  const saveTask = (values) => {
    let newId;

    if (taskList.value.length == 0) {
      newId = 0;
    } else {
      newId = taskList.value.length - 1 + 1;
    }
    
    const newTask = {
      id: newId,
      title: values.title,
      description: values.description,
      checked: false,
    };

    taskList.value.push(newTask);
  };

  const CheckItem = (item) => {
    const itemFinded = taskList.value.find((element) => element.id == item);

    if (itemFinded) {
      itemFinded.checked = !itemFinded.checked;
    }
  };

  const removeItem = (item) => {

    // Find the item object in the taskList
    const itemFinded = taskList.value.find((element) => element.id == item);

    // If the item is found
    if (itemFinded) {
      // Get the index of the found item in the array
      const itemIndex = taskList.value.indexOf(itemFinded);

      // Remove the item using splice
      if (itemIndex !== -1) {
        taskList.value.splice(itemIndex, 1); // Remove one item at the found index
      }
    }
  };

  return {
    taskList,
    CheckItem,
    removeItem,
    saveTask,
  };
});
