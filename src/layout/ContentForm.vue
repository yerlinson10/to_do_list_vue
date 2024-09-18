<template>

    <Dialog>
        <DialogTrigger class="w-full mb-2">
            <Button class="w-full hover:bg-[rgba(67,239,90,0.8)]" variant="constructive">
                <Icon name="PlusCircle" size="30" color="white" />
            </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px] dark:bg-[#030712] dark:text-white ">
            <FormTask></FormTask>
        </DialogContent>
    </Dialog>
</template>

<script setup>
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../components/ui/button';
import Icon from '../components/ui/Icon/Icon.vue';
import Textarea from '../components/ui/textarea/Textarea.vue';
import FormTask from '../components/FormTask.vue';

</script>
