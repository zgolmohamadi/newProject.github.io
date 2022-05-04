export default {
    setCoverAricles(state, payload){
        state.coverArticle.push(payload)
    },
    setMainArticles(state, payload){

        state.mainArticles=payload
    },
    setFeaturedArticles(state, payload){
        state.featuredArticles=payload;
    }
}