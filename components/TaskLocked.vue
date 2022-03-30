<template>
    <div class="col-6">
        <div class="h-100 bg-list py-4 px-3" style="min-height:121px;">
            <div class="row align-items-center mb-2">
                <div class="col-auto ps-0 align-self-start">
                    <img src="~/assets/ui/lock.png" width="16px" />
                </div>
                <div class="col">
                    <span class="h5 text-white text-shadow">{{ $t('name_' + task.id) }}</span>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script>
export default {

    props:[ 'task' ],
}
</script>