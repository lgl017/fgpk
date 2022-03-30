<template>
    <span v-if="value > 0"><span v-if="years > 0"><FormatNumber :value="years" /> {{ $t('date_age') }}</span> <span><FormatNumber :value="days" /> {{ $t('date_days') }}</span></span>
</template>

<script>
export default {

    props: [ 'value' ],
    
    computed: {
        
        years: function() { return Math.floor((this.value * 4) / 365) },
        
        days: function() { return Math.floor(this.value * 4 - (this.years * 365)) },
    },
}
</script>