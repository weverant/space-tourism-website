<template>
    <section class="section | home-header">
        <div class="column-layout home-header__layout">
            <div>
                <span class="overtitle condensed-font"
                    >So, you want to travel to</span
                >
                <h1 class="title | home-header__title">Space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            <div class="cta">
                <NuxtLink to="/destination" class="button button--home"
                    >Explore</NuxtLink
                >
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'home-page',
    },
    title: 'Home',
});
</script>

<style lang="scss">
@use '../assets/sass/base/mixins' as *;
@use '../assets/sass/base/placeholder';

body {
    --img: url('~/assets/images/home/background-home-mobile.jpg');

    @include after-in(medium) {
        --img: url('~/assets/images/home/background-home-tablet.jpg');
    }
    @include after-in(large) {
        --img: url('~/assets/images/home/background-home-desktop.jpg');
    }
}
</style>

<style lang="scss" scoped>
@use '../assets/sass/base/mixins' as *;

.home-header {
    display: flex;
    flex-direction: row;

    @include after-in(large) {
        min-height: 80vh;
    }

    &__title {
        font-size: var(--heading-500);
    }

    &__layout {
        width: 100%;

        & > * {
            @include before-in(large) {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        @include before-in(large) {
            text-align: center;
        }

        @include after-in(large) {
            align-items: flex-end;
        }
    }
}
.overtitle {
    display: block;

    color: var(--accent-color);
    font-size: var(--heading-100);
}

.cta {
    @include after-in(large) {
        margin-left: auto;
    }
}

.button--home {
    --_size: 7.5em;

    position: relative;

    font-size: clamp(2rem, 1rem + 2.4vw, 3.2rem);

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;

        background-color: rgba(var(--clear-color-rgb), 0.1);
        border-radius: 50%;

        transition: transform 0.32s var(--easing);

        z-index: -1;
    }

    &:hover {
        &::before {
            transform: scale(1.6);
        }
    }
}
</style>
