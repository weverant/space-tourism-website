<template>
    <section class="section">
        <h2 class="title title--section condensed-font">
            <span>03</span>Space launch 101
        </h2>
        <ContentSection
            :data="data.technology"
            :current-index="currentIndex"
            overtitle="The terminology…"
        >
            <ContentNav
                :length="data.technology.length"
                :current-index="currentIndex"
                :list-type="'numbers'"
                @change-index="changeIndex"
            />
        </ContentSection>
    </section>
</template>

<script setup>
const { data } = await useAsyncData('technology', () => {
    return queryContent('/technology').only(['technology']).findOne();
});

useHead({
    bodyAttrs: {
        class: 'technology-page',
    },
    title: 'Technology',
});

const currentIndex = ref(0);

const changeIndex = (index) => {
    currentIndex.value = index;
};
</script>

<style lang="scss">
@use '../assets/sass/base/mixins' as *;
@use '../assets/sass/base/placeholder';

.technology-page {
    --img: url('~/assets/images/technology/background-technology-mobile.jpg');

    @include after-in(medium) {
        --img: url('~/assets/images/technology/background-technology-tablet.jpg');
    }
    @include after-in(large) {
        --img: url('~/assets/images/technology/background-technology-desktop.jpg');
    }

    .section {
        @include after-in(large) {
            display: flex;
            flex-direction: column;
        }
    }

    .title--section {
        @include after-in(large) {
            margin-bottom: 0;
        }
    }

    .content {
        @include before-in(large) {
            > :first-child {
                order: 2;
            }

            > :last-child {
                order: 1;
            }
        }
        @include after-in(large) {
            flex-grow: 1;
            grid-template-columns: 66% 1fr;
        }

        &__body {
            @include after-in(large) {
                flex-direction: row;
                gap: 6rem;
                align-items: center;
            }
        }

        &__picture {
            @include before-in(large) {
                position: relative;
                max-width: inherit;
                width: 100%;
                height: 30rem;
            }

            @include before-in(medium) {
                height: 17rem;
            }

            @include after-in(large) {
                margin-right: max(
                    calc((100vw - var(--container-width)) / -2),
                    -24rem
                );
                align-items: center;
            }

            picture,
            img {
                max-width: inherit;
            }

            img {
                @include before-in(large) {
                    position: absolute;
                    left: 0;
                    top: 50%;

                    transform: translateY(-50%);
                    width: 100vw;
                    height: 30rem;
                    object-fit: cover;
                    margin-left: calc(var(--container-padding) * -1);
                }

                @include before-in(medium) {
                    height: 17rem;
                }
            }
        }

        &__nav {
            @include after-in(large) {
                display: flex;
                align-items: center;
            }
        }
    }

    .overtitle {
        color: var(--accent-color);
    }

    .copy {
        gap: 2rem;

        .title {
            font-size: var(--heading-300);
        }
    }
}
</style>

<style lang="scss" scoped></style>
