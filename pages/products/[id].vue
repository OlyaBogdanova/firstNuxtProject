<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta
                name="description"
                :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
    layout: 'products',
});
const url = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(url);
if (!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Product not defined',
        fatal: true,
    });
}
</script>

<style lang="scss" scoped></style>
