<template>
    <header>
        <nav>
            <NuxtLink to="/">Logo</NuxtLink>
            <ol>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/destination">Destination</NuxtLink></li>
                <li>
                    <NuxtLink to="/crew">Crew</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/technology">Technology</NuxtLink>
                </li>
            </ol>
        </nav>
    </header>
    <main class="">
        <slot />
    </main>
</template>

<style lang="scss" scoped></style>
