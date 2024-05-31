<template>
    <div class="card text-center">
<img :src="product.image" alt="product thumb" class='h-40'>
<p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
<NuxtLink :to="`/products/${product.id}`">
<p class="btn my-4">View details</p>
</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
interface Product {
  title: string
  image: string
  id: number
}
const {product} = defineProps<{
  product: Product
}>()


</script>

<style scoped>

</style>

  
