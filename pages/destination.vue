<template>
    <h1><span>01</span>Pick your destination</h1>
    <ContentNav
        :data="data.destinations"
        :length="data.destinations.length"
        :current-index="currentIndex"
        @change-index="changeIndex"
    />
    <ContentSection :data="data.destinations" :current-index="currentIndex" />
</template>

<script setup>
const { data } = await useAsyncData('destinations', () => {
    return queryContent('/destinations').only(['destinations']).findOne();
});

const currentIndex = ref(0);

const changeIndex = (index) => {
    currentIndex.value = index;
};
</script>

<style lang="scss" scoped></style>
