<template>
    <div class="col-12">
        <div class="bg-card pb-2">
            <div class="row align-items-center">
                <div class="col-3">
                    <span class="text-light text-shadow">{{ $t(text) }}</span>
                </div>
                <div class="col-9">
                    <div class="row g-2 align-items-center">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'text' ],
}
</script>