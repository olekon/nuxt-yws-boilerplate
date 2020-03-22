<template>
    <div>
        <div>LOGO</div>
        <b-button @click="onClick">
            {{ buttonText }}
        </b-button>
        <MyButton />
    </div>
</template>

<script>
import {MyButton} from '@nuxt-yws/shared-components';
export default {
    components: {
        MyButton
    },
    data() {
        return {
            buttonText: 'Click me'
        };
    },
    methods: {
        onClick() {
            this.$api.getSome().
                then(response => {
                    console.log(response.data);
                    this.buttonText = `User id ${response.data.userId}`;
                });
        }
    }
};
</script>
