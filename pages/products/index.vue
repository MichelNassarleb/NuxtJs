<template>
<div>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in products">
      <ProductCard  :product="product" />
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout:'products'
})
//fetch the products 
const { data : products } = await useFetch<{title:string,id:number,image:string}[]>('https://fakestoreapi.com/products')
useHead({
  title:'Nuxt Dojo | Merch'
})
</script>

<style scoped>

p {
  margin: 20px 0;
}
</style>
