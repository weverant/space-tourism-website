<template>
    <h1><span>03</span>Space launch 101</h1>
    <ContentNav
        :data="data.technology"
        :length="data.technology.length"
        :current-index="currentIndex"
        @change-index="changeIndex"
    />

    <ContentSection
        :data="data.technology"
        :current-index="currentIndex"
        overtitle="The terminology…"
    />
</template>

<script setup>
const { data } = await useAsyncData('technology', () => {
    return queryContent('/technology').only(['technology']).findOne();
});

const currentIndex = ref(0);

const changeIndex = (index) => {
    currentIndex.value = index;
};
</script>

<style lang="scss" scoped></style>
