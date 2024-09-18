<template>
    <div class="flex items-center justify-center">
        <div class="my-14 w-96">
            <!-- <Button class="w-full mb-2 hover:bg-[rgba(67,239,90,0.8)]" variant="constructive">
                <Icon name="PlusCircle" size="30" color="white" />
            </Button> -->
            <ContentForm></ContentForm>
            <!-- <CardTask></CardTask> -->
        </div>
    </div>
</template>

<script setup>
import CardTask from "../components/CardTask.vue";
import Button from "../components/ui/button/Button.vue";
import Icon from "../components/ui/Icon/Icon.vue";
import ContentForm from "./ContentForm.vue";

</script>

<style scoped></style>