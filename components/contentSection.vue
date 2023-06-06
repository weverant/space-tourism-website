<template>
    <div class="column-layout content">
        <div class="content__body">
            <slot></slot>
            <Transition name="content" mode="out-in">
                <div :key="currentIndex" class="copy active">
                    <span v-if="overtitle" class="overtitle">{{
                        overtitle
                    }}</span>
                    <h2 class="title">{{ data[currentIndex].name }}</h2>
                    <p class="copy__body">
                        {{
                            data[currentIndex].description ||
                            data[currentIndex].bio
                        }}
                    </p>
                    <slot name="extra" v-bind="data[currentIndex]"></slot>
                </div>
            </Transition>
        </div>
        <Transition name="fade" mode="out-in">
            <div :key="currentIndex" class="content__picture">
                <picture v-if="data[currentIndex].images.landscape">
                    <source
                        v-for="(image, i) in data[currentIndex].images"
                        :media="
                            i === 'landscape'
                                ? '(max-width: 960px)'
                                : '(min-width: 960px)'
                        "
                        :srcset="`/images/${image}`"
                    />
                    <img
                        :src="`/images/${data[currentIndex].images.landscape}`"
                        :alt="`${data[currentIndex].name} image`"
                    />
                </picture>
                <picture v-else>
                    <source
                        type="image/webp"
                        :srcset="`/images/${data[currentIndex].images.webp}`"
                    />
                    <source
                        type="image/png"
                        :srcset="`/images/${data[currentIndex].images.png}`"
                    />
                    <img
                        :src="`/images/${data[currentIndex].images.png}`"
                        alt=""
                    />
                </picture>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps(['currentIndex', 'data', 'overtitle']);
</script>

<style lang="scss" scoped>
@use '../assets/sass/base/mixins' as *;

.content {
    @include before-in(medium) {
        > :first-child {
            order: 2;
        }
        > :last-child {
            order: 1;
        }
    }
    &__body {
        display: flex;
        flex-direction: column;
        gap: var(--layout-row-gap);
    }

    &__picture {
        margin: 0 auto;
        max-width: 17rem;
        min-height: 17rem;

        @include before-in(large) {
            max-height: 52rem;
        }

        @include after-out(medium) {
            max-width: 30rem;
            margin-bottom: -2rem;
        }

        @include after-out(large) {
            max-width: 44rem;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }

        img {
            object-fit: contain;
        }
    }
}

.copy {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    &__body {
        @include before-in(large) {
            margin: 0 auto;
        }

        @include after-out(large) {
            max-width: 44ch;
        }
    }
}

.title {
    font-size: var(--heading-400);
    margin: 0;
}

.overtitle {
    text-transform: uppercase;
}

.content-enter-active,
.content-leave-active {
    transition: all 0.2s ease;
}

.content-enter-from {
    opacity: 0;
    transform: translateX(4rem);
}

.content-leave-to {
    opacity: 0;
    transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s var(--easing);
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

<style lang="scss">
@use '../assets/sass/base/mixins' as *;

.content {
    @include before-in(large) {
        text-align: center;
    }
}
</style>
