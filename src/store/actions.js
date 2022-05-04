export default {
  async loadArticles(context) {
    const response = await fetch(
      "http://apitest.tek-nic.com:3000/FirstPage"
    );

    const responseData = await response.json();

    if(responseData.message !="call successfully!"){
        const error = new Error(responseData.message || "Faild to fetch");
        throw error;
    }

    const result=responseData.result;

    const coverArticles = result.find(data=>data.type==0).list;
    const mainArticles = result.find(data=>data.type==1).list;
    const featuredArticles = result.find(data=>data.type==2);


    context.commit('setCoverAricles', coverArticles);
    context.commit('setMainArticles', mainArticles);
    context.commit('setFeaturedArticles', featuredArticles)
  },
};
