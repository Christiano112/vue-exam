<template>
  <div>
    <!-- <Home />
    <Repo /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import Repo from './components/Repo.vue'

export default {
  name: 'App',

  // components: {
  //   Home,
  //   Repo,
  // }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",
  Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  background: #0d1117;
  color: #c9d1d9;
}

</style>
