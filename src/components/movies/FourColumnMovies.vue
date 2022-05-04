<template>
  <div class="movie-list__img" :style="image">
  <base-card class="card--medium card--text-on-image" mode="textOnImg">
    <template #title>
      <h2>{{ title }}</h2>
    </template>
    <template #subTitle>
      <span>{{ subTitle }}</span>
    </template>
  </base-card>
  </div>
</template>
<script>
import BaseCard from "../base/BaseCard.vue";
export default {
  props: ["title", "subTitle","thumbImage"],
  components: { BaseCard },
  data(){
    return{
      image:{backgroundImage:'url('+this.thumbImage +')'}
    }
  }
};
</script>
