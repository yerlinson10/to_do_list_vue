import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore('Task', () => {
    const taskList = ref([]);

    const saveTask = (values) => {
        console.log();
        
        const newTask = {
            title: values.title,
            description: values.description,
            checked: false,
        };
        
        taskList.value.push(newTask);
    };

    return {
        taskList,
        saveTask
    }
});