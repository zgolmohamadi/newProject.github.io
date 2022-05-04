<template>
  <ul class="pagination">
    <li>
      <button
        class="pagination__arrow pagination__arrow--previous"
        @click="goPrev()"
      >
        previous
      </button>
    </li>
    <li
      v-for="(pageNumber, index) in PagesCount"
      :key="index"
    >
      <button
        @click="setPageNumber(pageNumber)"
        class="pagination__page-number"
        :class="{active: pageNumber===pageIndex}"
      >
        {{ pageNumber }}
      </button>
    </li>
    <li>
      <button
        class="pagination__arrow pagination__arrow--next"
        @click="goNext()"
      >
        next
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["PagesCount","pageIndex"],
  emits: ["go-next", "go-prev", "set-page-number"],

  methods: {
    goPrev() {
      this.$emit("go-prev");
    },
    goNext() {
      this.$emit("go-next");
    },
    setPageNumber(number) {
      this.$emit("set-page-number", number);
    },
  },
};
</script>

<style></style>
