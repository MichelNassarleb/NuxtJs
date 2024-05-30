<template>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
          <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
        </nav>
      </header>

      <div class="container mx-auto p-4">
        <slot />
      </div>

      <footer class="container mx-auto p-4 flex justify-between border-t-2 bottom">
        <ul class="flex gap-4">
            <li>
              <!-- NuxtLink gives you the ability to navigate to new screens without making extra requests to the server if it's not needed
              which makes your web app much more performant and scalable-->
  
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products">Products</NuxtLink>
            </li>
          </ul>
      </footer>
  </template>
  
  <script setup></script>
  <style scoped>
.router-link-exact-active {
    color:aqua;
}
  </style>
  