<script setup lang="ts">
import { defineProps, computed } from "vue";
import * as icons from "lucide-vue-next";

const colorClasses = {
    light: "text-light",
    dark: "text-dark",
    purple: "text-purple",
    limongrass: "text-limongrass",
    green: "text-green",
    orange: "text-orange",
    pink: "text-pink",
    primary: "text-primary",
    secondary: "text-secondary",
    neutral: "text-neutral-300",
    white: "text-white",
    red: "text-buttonDanger",
};

interface IconProps {
    name: keyof typeof icons;
    size?: number | string;
    strokeWidth?: number | string;
    defaultClass?: string;
    color?: keyof typeof colorClasses;
    className?: string;
}

const props = defineProps<IconProps>();

const iconComponent = computed(() => icons[props.name]);
</script>

<template>
    <component :is="iconComponent" :size="props.size" :class="[
        colorClasses[props.color || 'dark'],
        props.className,
        props.defaultClass,
    ]" :stroke-width="props.strokeWidth" />
</template>


<!-- <Icon name="AlignVerticalSpaceBetween" size="0" color="primary" /> -->