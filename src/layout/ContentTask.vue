<template>
    <div class="flex items-center justify-center">
        <div class="my-14 w-96">
            <h1 class="dark:text-white text-center font-bold text-5xl pb-2">To do list</h1>
            <ContentForm></ContentForm>
            <CardTask></CardTask>
        </div>
    </div>
</template>

<script setup>
    import CardTask from "../components/CardTask.vue";
    import ContentForm from "./ContentForm.vue";
</script>