export default {
  coverArticle(state) {
    return state.coverArticle[0];
  },
  hasCoverArticle(state) {
    return state.coverArticle && state.coverArticle.length > 0;
  },
  mainArticles(state) {
    return state.mainArticles;
  },
  hasMainArticles(state) {
    return state.mainArticles && state.mainArticles.length > 0;
  },
  featuredArticles(state) {
    return state.featuredArticles.list;
  },
  hasFeaturedArticles(state) {
    return (
      state.featuredArticles.list &&
      state.featuredArticles.list.length > 0
    );
  },
  featuredArticlesTitle(state) {
    return state.featuredArticles.title;
  },
};
