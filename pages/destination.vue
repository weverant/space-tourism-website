<template>
    <section class="section">
        <h2 class="title title--section condensed-font">
            <span>01</span>Pick your destination
        </h2>
        <ContentSection :data="data.destinations" :current-index="currentIndex">
            <ContentNav
                :data="data.destinations"
                :length="data.destinations.length"
                :current-index="currentIndex"
                :list-type="'text'"
                @change-index="changeIndex"
            />
            <template #extra="{ distance, travel }">
                <div class="copy__numbers">
                    <div
                        v-for="(value, info) in { distance, travel }"
                        class="number"
                    >
                        <span class="number__header">
                            {{
                                info === 'distance'
                                    ? 'Avg. distance'
                                    : 'Est. travel time'
                            }}
                        </span>
                        <span class="number__value">
                            {{ value }}
                        </span>
                    </div>
                </div>
            </template>
        </ContentSection>
    </section>
</template>

<script setup>
const { data } = await useAsyncData('destinations', () => {
    return queryContent('/destinations').only(['destinations']).findOne();
});

useHead({
    bodyAttrs: {
        class: 'destination-page',
    },
    title: 'Destination',
});

const currentIndex = ref(0);

const changeIndex = (index) => {
    currentIndex.value = index;
};
</script>

<style lang="scss">
@use '../assets/sass/base/mixins' as *;
@use '../assets/sass/base/placeholder';

.destination-page {
    --img: url('~/assets/images/destination/background-destination-mobile.jpg');

    @include after-out(medium) {
        --img: url('~/assets/images/destination/background-destination-tablet.jpg');
    }
    @include after-out(large) {
        --img: url('~/assets/images/destination/background-destination-desktop.jpg');
    }

    .content {
        > :first-child {
            order: 2;
        }
        > :last-child {
            order: 1;
        }

        &__body {
            @include after-out(large) {
                margin-left: auto;
            }
        }
    }

    .copy__body {
        position: relative;
        padding-bottom: 3.2rem;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: var(--accent-color);

            opacity: 0.25;
        }
    }
}

.copy__numbers {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    text-transform: uppercase;

    @include after-out(medium) {
        flex-direction: row;
        justify-content: center;
        gap: 8rem;
    }

    @include after-out(large) {
        justify-content: flex-start;
    }
}

.number {
    & > span {
        display: block;
    }

    &__header {
        font-size: var(--sub-heading-100);
        color: var(--accent-color);
    }

    &__value {
        font-size: var(--sub-heading-200);
        font-family: var(--font-title-family);
    }
}
</style>

<style lang="scss"></style>
