<template>
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img :src="`${product.image}`" class="my-7" />
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Price - ${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
          <p class="mb-7">{{ product.description }}</p>
          <p class="mb-7">{{ productPrice }}</p>

          <button class="btn flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>add to cart</span>

          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>

  interface Product {
  title: string
  image: string
  price:string
  description:string
  id: number
}
    const { product } = defineProps<{
        product:Product;
    }>();
    const productPrice = useState('10')
    await callOnce(async()=>{
      const data = await $fetch('/api/currency/GBP')
      productPrice.value  = data
    })
  </script>
  
  <style scoped>
    img {
      max-width: 400px;
    }
  </style>