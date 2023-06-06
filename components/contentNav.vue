<template>
    <nav class="content__nav">
        <ul class="list" :class="listType ? `list--${listType}` : ''">
            <li
                v-for="i in length"
                :class="{ active: currentIndex === i - 1 }"
                :key="i"
                class="list__el"
            >
                <button @click="$emit('changeIndex', i - 1)">
                    {{ data ? data[i - 1].name : i }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const props = defineProps(['length', 'data', 'currentIndex', 'listType']);
</script>

<style lang="scss" scoped>
@use '../assets/sass/base/mixins' as *;
@use '../assets/sass/base/placeholder' as *;

.list {
    display: flex;
    gap: 2rem;

    @include before-in(large) {
        justify-content: center;
    }

    &--numbers {
        @include after-out(large) {
            flex-direction: column;
            justify-content: center;
        }

        .list__el {
            &:hover {
                button {
                    --_border-opacity: 1;
                }
            }
            &.active {
                button {
                    background-color: var(--clear-color);
                    color: var(--background-color);
                }
            }

            button {
                font-size: var(--heading-200);
                font-family: var(--font-title-family);

                height: clamp(4rem, 6vw, 8rem);
                width: clamp(4rem, 6vw, 8rem);
                border: 1px solid
                    rgba(var(--clear-color-rgb), var(--_border-opacity, 0.25));
                border-radius: 50%;

                transition: all 0.2s ease;
            }
        }
    }

    &--text {
        .list__el {
            &.active {
                button {
                    color: var(--clear-color);

                    &::before {
                        opacity: 1;
                    }
                }
            }

            &:hover:not(.active) button::before {
                opacity: 0.5;
            }

            button {
                @extend %condensed-font;

                padding-bottom: 0.4em;
                position: relative;

                text-transform: uppercase;
                color: var(--accent-color);
                transition: color 0.2s var(--easing);

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: calc(100% - var(--_letter-spacing));
                    height: 3px;
                    background: var(--clear-color);

                    transition: opacity 0.2s var(--easing);
                    opacity: 0;
                }
            }
        }
    }

    &--dotted {
        --dot-size: clamp(1rem, 1.2vw, 1.5rem);

        .list__el {
            width: var(--dot-size);
            height: var(--dot-size);

            &.active {
                button {
                    opacity: 1;
                }
            }

            &:hover:not(.active) button {
                opacity: 0.5;
            }

            button {
                text-indent: 100%;
                white-space: nowrap;
                overflow: hidden;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: var(--clear-color);
                opacity: 0.18;

                transition: opacity 0.2s var(--easing);
            }
        }
    }
}
</style>
