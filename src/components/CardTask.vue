<template>
    <fieldset>
        <legend class="sr-only">Checkboxes</legend>
        <div class="space-y-2">
            <ItemTask 
                v-for="task in taskStore.taskList " 
                :key="task.id" 
                :id="task.id" 
                :title="task.title"
                :description="task.description" 
                :checked="task.checked" 
            />
        </div>
    </fieldset>
</template>

<script setup>
import ItemTask from "./ItemTask.vue";
import { useTaskStore } from "../stores/taskStore";

const taskStore = useTaskStore();

console.log(taskStore.taskList);

</script>

<style scoped></style>