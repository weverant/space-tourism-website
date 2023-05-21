<template>
    <Transition name="content">
        <div :key="currentIndex" class="sections active">
            <span>{{ overtitle }}</span>
            <h2>{{ data[currentIndex].name }}</h2>
            <p>
                {{ data[currentIndex].description || data[currentIndex].bio }}
            </p>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps(['currentIndex', 'data', 'overtitle']);
</script>

<style lang="scss" scoped>
.content-enter-from {
    opacity: 0;
    transform: translateX(4rem);
}
.content-enter-active {
    transition: all 0.4s ease;
}
.content-leave-to {
    opacity: 0;
    transform: translateX(0);
}
.content-leave-active {
    transition: all 0.2s ease;
    position: absolute;
}
</style>
