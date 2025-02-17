<script setup>
import { RouterView } from 'vue-router';
import Home from './components/Home.vue';
import UpdateUser from './components/UpdateUser.vue';
import Headera from './components/Headera.vue';
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue';

</script>

<template>
 <div>
  <Headera></Headera>
  <RouterView></RouterView>
  <Footer></Footer>
 </div>
</template>
