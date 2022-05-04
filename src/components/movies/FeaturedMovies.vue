<template>
  <div class="movie-list__card">
    <base-card>
      <template #moreDetails>
        <div class="movie-list__img" :style="image"></div>

        <span>{{ title }}</span>
        <span>{{ Summary }}</span>
      </template>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "../base/BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["mainTitle", "Summary", "title", "thumbImage"],

    data(){
    return{
      image:{backgroundImage:'url('+this.thumbImage +')'}
    }
  }
};
</script>

<style></style>
