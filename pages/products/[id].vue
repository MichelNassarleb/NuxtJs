<template>
  <div>
<ProductDetails v-if="product" :product="product"/>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const uri = `https://fakestoreapi.com/products/${id}`
// fetch the product
const { data : product } = await useFetch<{title:string,id:number,price:string,description:string,image:string}>(uri,{
  key:`${id}`,
})
if(!product.value){
  throw createError({statusCode:404,statusMessage:'Product Not Found',fatal:true})
}
definePageMeta({
  layout:'products'
})
</script>

<style scoped></style>
