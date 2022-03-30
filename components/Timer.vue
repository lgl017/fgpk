<template>
    <span>
        <span v-if="value == 'Infinity' || value < 0" class="text-normal">---</span>
        <FormatTime v-if="value != 'Infinity' && value > 0" :value="value" />
        <span v-if="value == 0">< 1s</span>
    </span>
</template>

<script>
export default {

    props: [ 'value' ],    
}
</script>