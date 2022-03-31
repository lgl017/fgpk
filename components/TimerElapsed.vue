<template>
    <span>
        <FormatTime :value="delay" />
    </span>
</template>

<script>
export default {

    props: [ 'value' ],  

    computed: {
    
        delay() { return new Date().getTime() - this.value },
    },
}
</script>