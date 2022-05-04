<template>
  <div class="card">
    <div v-if="textOnImg" class="card__details">
      <slot name="title"></slot>
      <slot name="subTitle"></slot>
    </div>
    <div  v-else class="card__more-details">
      <slot name="moreDetails"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["classModifier", "mode"],
  computed: {
    newClass() {
      return this.classModifier ? "card--" + this.classModifier : "";
    },
    textOnImg() {
      return this.mode === "textOnImg" ? true : false;
    },
  },
};
</script>
