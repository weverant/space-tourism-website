<template>
    <h1 class="condensed-font"><span>02</span>Meet your crew</h1>
    <ContentNav
        :data="data.crew"
        :length="data.crew.length"
        :current-index="currentIndex"
        @change-index="changeIndex"
    />

    <ContentSection
        :data="data.crew"
        :current-index="currentIndex"
        :overtitle="data.crew[currentIndex].role"
    />
</template>

<script setup>
const { data } = await useAsyncData('crew', () => {
    return queryContent('/crew').only(['crew']).findOne();
});

useHead({
    bodyAttrs: {
        class: 'crew-page',
    },
    title: 'Crew',
});

const currentIndex = ref(0);

const changeIndex = (index) => {
    currentIndex.value = index;
};
</script>

<style lang="scss">
@use '../assets/sass/base/mixins' as *;
@use '../assets/sass/base/placeholder';

.crew-page {
    --img: url('~/assets/images/crew/background-crew-mobile.jpg');

    @include after-in(medium) {
        --img: url('~/assets/images/crew/background-crew-tablet.jpg');
    }
    @include after-in(large) {
        --img: url('~/assets/images/crew/background-crew-desktop.jpg');
    }
}
</style>

<style lang="scss" scoped></style>
