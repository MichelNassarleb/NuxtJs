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
                        <NuxtLink to="products/">Products</NuxtLink>

                    </li>
                    <li>
                        <NuxtLink to="products/">Products</NuxtLink>

                    </li>
                </ul>
            </nav>
        </header>
<h2>Home</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius ex, velit dignissimos dolorem porro quis cum quae saepe voluptate.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id praesentium non eligendi laborum explicabo minima dicta placeat rerum quis delectus.</p>
    </div>
</template>

<script setup>

</script>
<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>