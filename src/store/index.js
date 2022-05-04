import mutations from "./mutations.js"
import getters from "./getters.js"
import actions from "./actions.js"
import { createStore } from 'vuex';

const store=createStore( {
    nameSpace:true,
    state(){
        return{
            coverArticle:[],
            mainArticles:[],
            featuredArticles:[]
        }
    },
    mutations,
    actions, 
    getters
})
export default store;