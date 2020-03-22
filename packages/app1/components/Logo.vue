<template>
    <div>
        <div>LOGO</div>
        <b-button @click="onClick">
            {{ buttonText }}
        </b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonText: 'Click me'
        }
    },
    methods: {
        onClick() {
            this.$api.getSome().
                then(response => {
                    console.log(response.data);
                    this.buttonText = `User id ${response.data.userId}`;
                })
        }
    }
}
</script>
