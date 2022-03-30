<template>
    <div class="col-12">
        <div class="bg-card py-2">
            <div class="row align-items-center">
                <div class="col-3">
                    <span class="text-light text-shadow">{{ $t(text) }}</span>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'text' ],
}
</script>