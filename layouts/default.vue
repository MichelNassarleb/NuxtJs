<template>
    <div>
      <header>
        <nav>
          <ul>
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
        </nav>
      </header>
      <div>
        <slot />
      </div>
      </div>
  </template>
  
  <script setup></script>
  <style scoped>
.router-link-exact-active {
    color:aqua;
}
  </style>
  