import { createStore } from "vuex";
import axios from "axios";
export default createStore({
    state:{
        showOverlay: false,
        data:[],
        heading:'Top News Headlines of today',
        category:'',
        // searchText:'',
    },
    getters:{
        showOverlay:state=>state.showOverlay,
        category:state=>state.category,
        // searchText:state=>state.searchText,
    },
    actions:{
        async loadData(context) {
            try {
              const apikey = process.env.VUE_APP_NEWS_API_KEY;
              const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&category=${context.state.category}&apiKey=${apikey}`
              );
              context.commit("loadData", response.data.articles);
              context.commit("updateHeading");
            } catch (error) {
              console.error('Error loading data:', error);
            }
          },
          updateShowOverlay({commit},value){
            commit("updateShowOverlay",value)
          },
          updateCategory({commit,dispatch},value){
            console.log(value);
            commit("updateCategory",value);
            dispatch('loadData');
          }, 
        //   async updateSearch(context) {
        //     try {
        //       const apikey = process.env.VUE_APP_NEWS_API_KEY;
        //       const response = await axios.get(
        //         `https://newsapi.org/v2/everything?q=${context.state.searchText}&sortBy=publishedAt&apiKey=${apikey}`
        //       );
        //       context.commit("loadData", response.data.articles);
        //     if (response.data.articles.length === 0) {
        //     context.commit("updateSearchHeading", 'No results found');
        //     } else {
        //     context.commit("updateSearchHeading", `Search Results for: ${context.state.searchText}`);
        //     }
        //     } catch (error) {
        //       console.error('Error loading data:', error);
        //     }
        //   },
    },
    mutations:{
        loadData:(state,data)=>(state.data=data),
        updateShowOverlay:(state,value)=>(state.showOverlay=value),
        updateCategory:(state,value)=>(state.category=value),
        updateHeading: (state) => { 
            state.heading = `Top ${state.category} Headline News of Today`; 
        },
        // setSearchText:(state,value)=>(state.searchText=value),
        // updateSearchHeading: (state) => {
        //     state.heading = `Search Results for: ${state.searchText}`;
        // },  
    },
})
