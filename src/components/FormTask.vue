<template>
    <form @submit="onSubmit" class="grid items-start gap-4 px-4">
        <FormField v-slot="{ componentField }" name="title">
            <FormIte class="grid gap-2">
                <FormLabel>Title</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Title task" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                    This is the title of your task.
                </FormDescription>
                <FormMessage />
            </FormIte>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
            <FormIte class="grid gap-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <textarea placeholder="Description task" v-bind="componentField"></textarea>
                </FormControl>
                <FormDescription>
                    This is the description of your task.
                </FormDescription>
                <FormMessage />
            </FormIte>
        </FormField>
        <Button type="submit">
            Create task
        </Button>
    </form>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { schema } from '@/schemas/validationTaskSchema'


const form = useForm({
    validationSchema: schema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
})
</script>