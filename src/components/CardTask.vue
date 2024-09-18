<template>
    <fieldset>
        <legend class="sr-only">Checkboxes</legend>
        <div class="space-y-2">
            <ItemTask id="1" title="Title" description="description" checked />
            <ItemTask id="2" title="Title" description="description" />
        </div>
    </fieldset>
</template>

<script setup>
import ItemTask from "./ItemTask.vue";

</script>

<style scoped></style>