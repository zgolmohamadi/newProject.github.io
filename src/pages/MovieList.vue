<template>
  <div class="movies-list">
    <div class="movies-list__left">
      <the-side-bar></the-side-bar>
    </div>
    <div class="movies-list__right">
      <p v-if="isLoading" class="movies-list__loading">
        Please Wait ...
      </p>
      <template v-else>
        <div class="movie-list__covered" v-if="hasCoverArticle">
          <main-movie
            v-for="article in coverArticles"
            :key="article.ContentID"
            :title="article.Title"
            :subTitle="article.Summary"
            :thumbImage="article.ThumbImage"
          ></main-movie>
        </div>

        <div class="movie-list__four-coumn" v-if="hasMainArticles">
          <four-column-movies
            v-for="article in mainArticles"
            :key="article.ContentID"
            :title="article.Title"
            :subTitle="article.Summary"
            :thumbImage="article.ThumbImage"
          ></four-column-movies>
        </div>
        <div class="movie-list__all" v-if="hasFeaturedArticles">
          <div class="movie-list__title">
            {{ featuredArticlesTitle }}
          </div>
      
            <div class="movie-list__container">
              <featured-movies
                v-for="article in featuredArticlesList"
                :key="article.ContentID"
                :title="article.Title"
                :Summary="article.Summary"
                :thumbImage="article.ThumbImage"
              ></featured-movies>
            </div>
            <div v-if="activePageNumber">
              <the-pageing
                :PagesCount="PagesCount"
                :pageIndex="pageIndex"
                @go-next="goNext"
                @go-prev="goPrev"
                @set-page-number="setPageNumber"
              ></the-pageing>
            </div>
       
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import TheSideBar from "@/components/layout/TheSideBar.vue";
import FeaturedMovies from "@/components/movies/FeaturedMovies.vue";
import FourColumnMovies from "@/components/movies/FourColumnMovies.vue";
import MainMovie from "@/components/movies/MainMovie.vue";
import ThePageing from "@/components/movies/ThePageing.vue";
export default {
  components: {
    TheSideBar,
    FeaturedMovies,
    FourColumnMovies,
    MainMovie,
    ThePageing,
  },
  data() {
    return {
      isLoading: false,
      error: "",
      pageSize: 10,
      pageIndex: 1,
    };
  },
  computed: {
    coverArticles() {
      return this.$store.getters["coverArticle"];
    },
    hasCoverArticle() {
      return this.$store.getters["hasCoverArticle"];
    },
    mainArticles() {
      return this.$store.getters["mainArticles"];
    },
    hasMainArticles() {
      return this.$store.getters["hasMainArticles"];
    },
    featuredArticles() {
      return this.$store.getters["featuredArticles"];
    },

    featuredArticlesTitle() {
      return this.$store.getters["featuredArticlesTitle"];
    },
    hasFeaturedArticles() {
      return this.$store.getters["hasFeaturedArticles"];
    },
    featuredArticlesLength() {
      return this.hasFeaturedArticles
        ? this.featuredArticles.length
        : 0;
    },
    PagesCount() {
      return Math.ceil(this.featuredArticlesLength / this.pageSize);
    },
    activePageNumber() {
      return this.PagesCount>1;
    },
    featuredArticlesList() {

      if (this.pageIndex > 1 || this.pageIndex < this.PagesCount) {
        return this.featuredArticles.slice(
          this.pageSize * (this.pageIndex - 1),
          this.pageSize * this.pageIndex
        );
      }

      return this.featuredArticles;
    },
  },
  created() {
    this.loadArticles();
  },
  methods: {
    async loadArticles() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadArticles");
      } catch (error) {
        this.error = error || "An error has occurred";
      }
      this.isLoading = false;
    },

    setPageNumber(number) {
      this.pageIndex = number;
    },
    goPrev() {
      this.pageIndex =
        this.pageIndex == 1 ? this.pageIndex : this.pageIndex - 1;
    },
    goNext() {
      this.pageIndex =
        this.pageIndex < this.PagesCount
          ? this.pageIndex + 1
          : this.pageIndex;
    },
  },
};
</script>

<style scoped>
@import "@/UI/Css/Pages/MoviesList/moviesList.css";
</style>
>
