<template>
            
    <Dialog>
        <DialogTrigger class="w-full mb-2">
            <Button class="w-full hover:bg-[rgba(67,239,90,0.8)]" variant="constructive">
                <Icon name="PlusCircle" size="30" color="white" />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>

            <DialogFooter>
                Save changes
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<script setup>
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '../components/ui/button'
import Icon from '../components/ui/Icon/Icon.vue';

</script>
