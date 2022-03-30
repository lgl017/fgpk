<template>
    <div class="col-12 px-0">
        <div class="px-0 row align-items-center">
            <div class="col-5">
                <div class="bg-item-locked">
                    <div class="ps-1 row align-items-center">
                        <div class="col-auto px-0 align-self-start">
                            <img src="~/assets/ui/lock.png" width="16px" />
                        </div>
                        <div class="col small">
                            <span class="text-white text-shadow"><FormatCoin :value="item.coinReq" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'item' ],    
}
</script>