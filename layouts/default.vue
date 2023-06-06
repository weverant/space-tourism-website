<template>
    <header class="site-header" ref="header">
        <h1 class="site-header__logo">
            <NuxtLink to="/"
                ><img
                    src="~/assets/images/shared/logo.svg"
                    alt="space tourism logo"
                    title="Space Tourism Logo"
                />
            </NuxtLink>
        </h1>
        <nav class="main-nav">
            <button class="nav-menu" @click="showMenu()">
                <img
                    :src="showMobileMenu ? closeIcon : hamburgerIcon"
                    :aria-label="showMobileMenu ? 'Close menu' : 'Open menu'"
                    :alt="showMobileMenu ? 'close icon' : 'hamburger icon'"
                />
            </button>
            <div class="main-nav__inner" :class="{ open: showMobileMenu }">
                <ol class="main-nav__list">
                    <li
                        v-for="link in nav"
                        :key="link.name"
                        class="main-nav__item"
                    >
                        <NuxtLink :to="link.path">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ol>
            </div>
        </nav>
    </header>
    <main class="container">
        <slot />
    </main>
</template>

<script setup>
import hamburgerIcon from '~/assets/images/shared/icon-hamburger.svg';
import closeIcon from '~/assets/images/shared/icon-close.svg';

const nav = [
    { name: 'Home', path: '/' },
    { name: 'Destination', path: '/destination' },
    { name: 'Crew', path: '/crew' },
    { name: 'Technology', path: '/technology' },
];

const route = useRoute();

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Space Tourism` : 'Space Tourism';
    },
});

const showMobileMenu = ref(false);

const showMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
};

watch(route, () => {
    showMobileMenu.value = false;
});
</script>

<style lang="scss">
@use '../assets/sass/base/mixins' as *;

:root {
    --header-padding: 4rem;
    --header-height: 4rem;

    @include after-in(medium) {
        --header-height: 9rem;
    }
}

.page-enter-active,
.page-leave-active {
    transition: all 0.32s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(0.4rem);
    transition: all 0s;
}
</style>

<style lang="scss" scoped>
@use '../assets/sass/base/mixins' as *;
@use '../assets/sass/base/placeholder';

.site-header {
    @extend %container;

    position: absolute;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: var(--header-padding);
    padding-top: var(--header-padding);

    z-index: 1;

    @include after-in(medium) {
        padding-top: 0;
    }

    @include after-in(large) {
        padding-top: var(--header-padding);
    }

    &__logo {
        width: 4rem;

        @include after-in(medium) {
            width: 4.8rem;
        }

        @include after-in(wide) {
            margin-left: calc(var(--container-width) / -12 - var(--gutter));
        }
    }
}

.main-nav {
    position: relative;

    &::before {
        @include after-in(wide) {
            content: '';
            position: absolute;
            right: 95%;
            top: 50%;
            width: calc(66.66% + 5%);

            height: 1px;
            background-color: var(--clear-color);
            opacity: 0.25;

            z-index: 2;
        }
    }

    @include after-in(medium) {
        min-width: 60%;
    }

    &__inner {
        position: relative;
        height: var(--header-height);

        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            inset: 0 0;
            width: 100%;
            height: 100%;
            background-color: rgba(var(--clear-color-rgb), 0.04);
            backdrop-filter: blur(40px);

            z-index: -1;

            @include after-in(medium) {
                inset: 0 calc(var(--container-padding) * -1);
                width: calc(100% + var(--container-padding) * 2);
            }

            @include after-in(wide) {
                width: calc(100% + (100vw - var(--container-width)) / 2);
            }
        }

        &.open {
            transform: translateX(-100%);
        }

        @include before-in(medium) {
            position: fixed;
            right: -66%;
            top: 0;

            width: 66vw;
            height: 100vh;
            transition: transform 0.4s var(--easing);
            transform: translateX(0);
        }

        @include after-in(medium) {
            display: flex;
            justify-content: center;
        }

        @include after-in(wide) {
            justify-content: flex-end;
        }
    }

    &__list {
        counter-reset: nav-counter;

        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        height: 100%;

        @extend %condensed-font;
        font-size: 1.6rem;

        @include before-in(medium) {
            padding: 12rem 3.2rem;
            overflow: scroll;
        }

        @include after-in(medium) {
            flex-direction: row;
            gap: 4.8rem;
        }
    }

    &__item {
        counter-increment: nav-counter;

        &:first-of-type a::before {
            counter-set: nav-counter;
        }

        a {
            display: flex;
            gap: 0.5em;

            position: relative;

            @include after-in(medium) {
                height: 100%;
                align-items: center;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;

                    height: 0.3rem;
                    width: 100%;
                    background-color: rgba(
                        var(--clear-color-rgb),
                        var(--_opacity, 0)
                    );

                    transition: background-color 0.24s ease;
                }

                &.router-link-active::after {
                    --_opacity: 1;
                }

                &:hover:not(.router-link-active)::after {
                    --_opacity: 0.5;
                }
            }

            &::before {
                content: '0' counter(nav-counter);
                font-weight: 700;
            }
        }
    }
}

.nav-menu {
    position: relative;
    z-index: 2;

    @include after-in(medium) {
        display: none;
    }
}
</style>
