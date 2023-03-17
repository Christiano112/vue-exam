<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  background: #0d1117;
  color: #c9d1d9;
  margin: 0 auto;
  width: 98%;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: currentColor;
}
</style>
