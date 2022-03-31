<template>
    <div class="col-auto">
        <div class="bg-achievement p-2 position-relative" style="width:48px; height:48px;">
            <button type="button" class="position-absolute start-0 btn p-0 border-0" style="top:-8px;" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="~/assets/ui/info.png" width="12px" />
            </button>
            <div class="dropdown-menu lh-1" style="max-width:35%;">
                <div class="mb-1 text-light text-shadow">{{ $t('name_' + achievement.id) }}</div>
                <div class="mb-1 small text-light text-shadow">{{ $t('desc_' + achievement.id) }}</div>
                <div class="small text-muted text-shadow">{{ $t('check_' + achievement.id) }}</div>
                <div v-if="achievement.apply" class="mt-1 small text-success text-shadow">{{ $t('bonus_' + achievement.id) }}</div>
            </div>
            <div class="text-muted small text-shadow text-center">{{ $t('word_lvl') }}</div>
            <div class="text-light text-shadow text-center">{{ achievement.level }}</div>
            <div v-if="achievement.apply != null" class="position-absolute" style="top:-12px; right:-12px;">
                <img src="~/assets/ui/achievementBonus.png" width="36px" />
            </div>
            <div v-if="achievement.done == true" class="position-absolute" style="bottom:-12px; right:-12px;">
                <img src="~/assets/ui/achievementDone.png" width="36px" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'achievement' ],    
}
</script>