<template>
    <div class="relative">
        <span class="absolute top-0 right-0 p-2 text-gray-500 dark:text-gray-300 cursor-pointer ">
            <ButtonVue class="py-5 px-3 h-full" variant="destructive"><Icon name="Trash2" size="20" color="white" /></ButtonVue>
        </span>
        <label v-bind:for="id"
            class="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-green-100 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-green-900/50">
            <div class="flex items-center">
                &#8203;
                <input type="checkbox" v-bind:checked="checked"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    v-bind:id="id" />
            </div>

            <div>
                <strong class="font-medium text-gray-900 dark:text-white"> {{ title }} </strong>

                <p class="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
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



defineProps(
    [
        'title',
        'description',
        'checked',
        'id'
    ]
)

</script>

<style scoped></style>