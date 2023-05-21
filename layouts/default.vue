<template>
    <header>
        <nav>
            <NuxtLink to="/">Logo</NuxtLink>
            <ul>
                <li><NuxtLink to="/">00 Home</NuxtLink></li>
                <li><NuxtLink to="/destination">01 Destination</NuxtLink></li>
                <li>
                    <NuxtLink to="/crew">02 Crew</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/technology">03 Technology</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <main class="">
        <slot />
    </main>
</template>

<style lang="scss" scoped></style>
