<template>
  <div class="container mt--3">
    <the-header></the-header>
    <movie-list></movie-list>
      <the-footer></the-footer>

  </div>
</template>

<script>
import TheFooter from './components/layout/TheFooter.vue';
import TheHeader from "./components/layout/TheHeader.vue";
import MovieList from './pages/MovieList.vue';

export default {
  components: {
    TheHeader,
    MovieList,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
@import "@/UI/Css/Public/public.css";
</style>
