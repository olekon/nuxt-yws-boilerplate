<template>
    <b-button
        :variant="variant"
        @click="onClick"
    >
        This was clicked {{ clicked }} times
    </b-button>
</template>

<script>
export default {
    props: {
        variant: {type: String, default: 'primary'},
    },
    data() {
        return {
            clicked: 0
        };
    },
    methods: {
        onClick() {
            this.clicked += 1;
        }
    }
};
</script>