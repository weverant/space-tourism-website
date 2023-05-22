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

const currentIndex = ref(0);

const changeIndex = (index) => {
    currentIndex.value = index;
};
</script>

<style lang="scss" scoped></style>
