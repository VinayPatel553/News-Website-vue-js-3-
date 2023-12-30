<template>
  <HeaderComponent></HeaderComponent>
  <HomePage></HomePage>
  <FooterComponent></FooterComponent>
</template>

<script>
import HomePage from './components/HomePage.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
#app{
  background-color: #E0E0E0;
}
</style>
