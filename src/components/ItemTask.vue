<template>
    <div class="relative flex flex-row-reverse has-[:checked]:bg-green-100 dark:border-gray-700 rounded-lg   border border-gray-200  transition hover:bg-gray-50 dark:hover:bg-gray-900 dark:has-[:checked]:bg-green-900/50 ">
        <span class=" top-0 right-0 p-2 text-gray-500 dark:text-gray-300 cursor-pointer  ">
            <ButtonVue @click="taskStore.removeItem(id)" class="py-5 px-3 h-full" variant="destructive">
                <Icon name="Trash2" size="20" color="white" />
            </ButtonVue>
        </span>
        <label v-bind:for="key"
            class="flex w-full cursor-pointer overflow-hidden relative items-start gap-4 p-4 ">
            <div class="flex items-center bg-slate-50 absolute inset-0 opacity-0">
                &#8203;
                <input type="checkbox" v-bind:checked="checked" @change="taskStore.CheckItem(id)"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    v-bind:id="key" />
            </div>

            <div>
                <strong class="font-medium text-gray-900 dark:text-white text-xl" :class="{ 'text-2xl' : !description}"> {{ title }} </strong>
                <p v-show="description" class="mt-1 text-pretty text-base text-gray-700 dark:text-gray-400">
                    {{ description }}
                </p>
            </div>
        </label>
    </div>
</template>



<script setup>
import { defineProps } from "vue";
import ButtonVue from "@/components/ui/button/Button.vue";
import Icon from "./ui/Icon/Icon.vue";
import { useTaskStore } from "../stores/taskStore";

const taskStore = useTaskStore();


defineProps(
    [
        'title',
        'description',
        'checked',
        'id'
    ]
)

</script>
.checked, input
<style scoped></style>