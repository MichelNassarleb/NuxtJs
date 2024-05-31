<template>
  <div>
   <p>{{ title }}</p>
   <p>{{ `${price}$` }}</p>
   <p>{{ id }}</p>

  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`
// fetch the product
const { data : product } = await useFetch<{title:string,id:number,price:string}>(uri,{
  key:`${id}`,
})
const {title = '',price} = product.value || {};
definePageMeta({
  layout:'products'
})
</script>

<style scoped></style>
