<template>
  <div>
<ProductDetails :product="product"/>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`
// fetch the product
const { data : product } = await useFetch<{title:string,id:number,price:string}>(uri,{
  key:`${id}`,
})
definePageMeta({
  layout:'products'
})
</script>

<style scoped></style>
