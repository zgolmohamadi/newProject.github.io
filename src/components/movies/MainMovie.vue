<template>
<div class="movie-list__img" :style="image">
  <base-card class="card--large card--text-on-image" mode="textOnImg">
    <template #title>
      <h1>{{title}}</h1>
      </template
    >
    <template #subTitle>
      <span>{{subTitle}}</span></template
    >
  </base-card>
  </div>
</template>

<script>
import BaseCard from "../base/BaseCard.vue";
export default {
  components: { BaseCard },
  props:["title", "subTitle", "thumbImage"],
  data(){
    return{
      image:{backgroundImage:'url('+this.thumbImage +')'}
    }
  }
};
</script>
