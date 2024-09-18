import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore('Task', () => {
    const taskList = ref([]);

    const saveTask = (titleInput, descriptionInput) => {
        
        const newTask = {
            title: titleInput,
            description: descriptionInput,
            checked: false,
        };
        
        taskList.value.push(newTask);
    };

    return {
        taskList,
        saveTask
    }
});