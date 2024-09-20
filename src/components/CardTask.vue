<template>
    <fieldset class="overflow-auto max-h-[70vh] scrollbar">
        <legend class="sr-only">Checkboxes</legend>
        <div class="space-y-2 ">
            <ItemTask v-for="task in taskStore.taskList " :key="task.id" :id="task.id" :title="task.title"
                :description="task.description" :checked="task.checked" />
        </div>
    </fieldset>
</template>

<script setup>
import ItemTask from "./ItemTask.vue";
import { useTaskStore } from "../stores/taskStore";

const taskStore = useTaskStore();

console.log(taskStore.taskList);

</script>

<style scoped>
.scrollbar {
    scrollbar-color: hsl(var(--constructive)) transparent;
    scrollbar-width: thin;
    padding-right: 0.5rem;
}
</style>