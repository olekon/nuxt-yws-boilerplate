<template>
    <div>
        <b-form-group
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
        >        
            <b-form-input
                id="input-1"
                @input="$emit('input', $event)"
            />
            <MyButton variant="danger" />
        </b-form-group>
    </div>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
    components: {
        MyButton
    }
};
</script>