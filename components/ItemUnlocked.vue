<template>
    <div class="col-12 px-0">
        <div class="row px-0 align-items-center">
            <div class="col-5">
                <div class="bg-item">
                    <div class="row align-items-center">
                        <div class="col-auto ps-0 align-self-start">
                            <button type="button" class="btn p-0 border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="~/assets/ui/info.png" width="12px" />
                            </button>
                            <div class="dropdown-menu lh-1" style="max-width:35%;">
                                <small class="text-light text-shadow">{{ $t('desc_' + item.id) }}</small>
                            </div>
                        </div>
                        <div class="col">
                            <span class="h5 text-white text-shadow">{{ $t('name_' + item.id) }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-auto">
                <button type="button" class="btn p-0 border-0" @click="$emit('activate')">
                    <img v-if="item.activated == false" src="~/assets/ui/activatedOff.png" width="32px" />
                    <img v-if="item.activated == true" src="~/assets/ui/activatedOn.png" width="32px" />
                </button>
            </div>
            <div class="col">
                <div class="bg-item-desc">
                    <div class="text-start">
                        <small class="text-success">{{ $t('effectName_' + effectId) }}</small>
                        <small class="text-success">+<FormatNumber :value="Math.round(100 * (item.effect - 1))" /></small>
                        <small class="text-success">%</small>
                    </div>
                    <div class="d-flex align-items-center justify-content-end small">
                        <small class="text-danger">-</small>
                        <FormatCoin :value="item.getExpense()" class="text-danger" />
                        <small class="text-muted ms-1">/{{ $t('word_days') }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'item', 'effectId' ],    
}
</script>