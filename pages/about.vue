<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius ex,
      velit dignissimos dolorem porro quis cum quae saepe voluptate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id praesentium
      non eligendi laborum explicabo minima dicta placeat rerum quis delectus.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
const {data} = await useFetch<{message:string}>('/api/ninja?name=mario',{
  method:'post',
  body:{
    age:25
  }
})
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
