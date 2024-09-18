<template>
    <Form :validation-schema="schemaTask" @submit="onSubmit" class="grid items-start gap-4 px-4">
        <DialogHeader>
            <DialogTitle class="text-xl font-bold">Cerate new task</DialogTitle>
        </DialogHeader>
        <FormField v-slot="{ componentField }" name="title">
            <FormIte>
                <FormLabel>Title</FormLabel>
                    <FormMessage class="my-1"/>
                <FormControl>
                    <Input type="text" placeholder="Title task" v-bind="componentField"
                        class="col-span-3 dark:bg-[#030712] ring-offset-background " />
                </FormControl>
                <FormDescription>
                    This is the title of your task.
                </FormDescription>
            </FormIte>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
            <FormIte >
                <FormLabel>Description</FormLabel>
                    <FormMessage class="my-1"/>
                <FormControl>
                    <Textarea placeholder="Task Description" v-bind="componentField"
                    class="dark:bg-[#030712] col-span-3 "></Textarea>
                </FormControl>
                <FormDescription>
                    This is the description of your task.
                </FormDescription>
            </FormIte>
        </FormField>
        <DialogFooter>
            <Button type="submit">
                Create task
            </Button>
        </DialogFooter>
    </Form>
</template>

<script setup>
import { Form } from 'vee-validate';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { schemaTask } from '../schemas/validationTaskSchema';
import Textarea from './ui/textarea/Textarea.vue';
import { ref } from 'vue';

const title = ref('');
const description = ref('');

const onSubmit = () => {
    console.table('Task created', title.value, description.value);
    // Reset form fields
    title.value = '';
    description.value = '';
}

</script>
