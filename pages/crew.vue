<template>
    <section class="section">
        <h2 class="title title--section condensed-font">
            <span>02</span>Meet your crew
        </h2>
        <ContentSection
            :data="data.crew"
            :current-index="currentIndex"
            :overtitle="data.crew[currentIndex].role"
        >
            <ContentNav
                :data="data.crew"
                :length="data.crew.length"
                :current-index="currentIndex"
                :list-type="'dotted'"
                @change-index="changeIndex"
            />
        </ContentSection>
    </section>
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

    @include after-out(medium) {
        --img: url('~/assets/images/crew/background-crew-tablet.jpg');
    }
    @include after-out(large) {
        --img: url('~/assets/images/crew/background-crew-desktop.jpg');
    }

    .section {
        @include after-out(large) {
            display: flex;
            flex-direction: column;
        }
    }

    .title--section {
        @include after-out(large) {
            margin-bottom: 0;
        }
    }

    .content {
        @include after-out(large) {
            flex-grow: 1;
        }

        &__body {
            display: flex;
            flex-direction: column;

            @include after-out(large) {
                justify-content: space-between;
            }

            position: relative;

            @include after-out(medium) {
                > :first-child {
                    order: 2;
                }

                > :last-child {
                    order: 1;
                }
            }
        }

        &__nav {
            @include after-out(large) {
                margin-bottom: 8vh;
            }
        }

        &__picture {
            position: relative;
            max-width: inherit;
            width: 100%;

            @include before-in(medium) {
                height: 22rem;
            }

            img,
            picture {
                @include before-in(large) {
                    height: 100%;
                }
            }

            picture {
                @include after-out(large) {
                    display: flex;
                    justify-content: flex-end;
                }
            }

            img {
                margin: 0 auto;

                @include after-out(large) {
                    max-height: 66vh;
                }
            }

            @include before-in(medium) {
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -1px;

                    height: 1px;
                    width: 100%;
                    background-color: var(--clear-color);

                    opacity: 0.25;
                }
            }
        }
    }

    .copy {
        gap: 1.6rem;

        @include after-out(medium) {
            gap: 2rem;
        }

        @include after-out(large) {
            margin-top: 10vh;
        }

        .title {
            font-size: var(--heading-300);
        }
    }

    .overtitle {
        font-size: var(--heading-200);
        font-family: var(--font-title-family);
        opacity: 0.5;
    }
}
</style>

<style lang="scss" scoped>
@use '../assets/sass/base/mixins' as *;
</style>
