<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link
                    class="font-bold"
                    to="/"
                    >Nuxt Magazine</nuxt-link
                >
                <ul class="flex gap-4">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            class="btn"
                            to="/products"
                            >Products</nuxt-link
                        >
                    </li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
