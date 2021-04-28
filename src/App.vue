<template>
  <div id="app">
    <AppHeader />
        <Slider />
        <!--<router-view />-->

    <AppFooter />

  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter,
    Slider,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
