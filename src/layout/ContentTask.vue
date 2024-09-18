<template>
    <div class="flex items-center justify-center">
        <div class="my-14 w-96">
            <ContentForm></ContentForm>
            <CardTask></CardTask>
        </div>
    </div>
</template>

<script setup>
    import CardTask from "../components/CardTask.vue";
    import ContentForm from "./ContentForm.vue";
</script>