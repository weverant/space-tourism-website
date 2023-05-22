<template>
    <nav>
        <ul>
            <li
                v-for="i in length"
                :class="{ active: currentIndex === i - 1 }"
                :key="i"
            >
                <button @click="$emit('changeIndex', i - 1)">
                    {{ data ? data[i - 1].name : i }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const props = defineProps(['length', 'data', 'currentIndex']);
</script>

<style lang="scss" scoped></style>
