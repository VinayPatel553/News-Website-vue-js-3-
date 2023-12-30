<template>
  <div class="container mt-3 mb-3 text-center">
    <h1 class="heading mt-4 mb-4">{{ heading }}</h1>
    <div class="row row-cols-1 row-cols-md-4">
      <div class="col mb-4" v-for="item in data" :key="item.title">
        <div class="card">
          <img v-if="item.urlToImage" :src="item.urlToImage"  @error="handleImage(item)" class="img-fluid" alt="News Image" />
          <img v-else src="../assets/news-image.jpg" class="img-fluid" alt="News Image" />
          <div class="card-content text-start">
            <div class="card-footer border border-dark">
              <p v-if="item.source.name"><u>Published by</u> - {{ item.source.name }}</p>
              <p><u>Published on</u> - {{ formatDate(item.publishedAt) }}</p>
            </div>
            <!-- <div class="border border-dark"> -->
              <div class="card-title mt-2"><u>Title</u> - {{ truncateText(item.title,50) }}</div>
              <div class="card-body">
              <u>Description</u> - {{ truncateText(item.description,120) || 'No description available.' }}
              </div>
            <!-- </div> -->
          </div>
          <div class="card-overlay" @mouseover=updateShowOverlay(true) @mouseleave=updateShowOverlay(false)>
            <a :href="item.url" target="_blank" class="read-more-button" v-show="showOverlay">Read Full Article ...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import {mapState,mapActions,mapGetters} from 'vuex';

export default {
  name: 'HomePage',
  // data() {
  //   return {
  //     showOverlay: false,
  //     data:[],
  //   };
  // },
  computed:{
    ...mapState(['showOverlay','data','heading']),
    ...mapGetters(['showOverlay']),
    },
  methods: {
    // async loadData() {
    //   try {
    //     const apikey=process.env.VUE_APP_NEWS_API_KEY;
    //     const response = await axios.get(
    //       `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`
    //     );
    //     this.data = response.data.articles;
    //     console.log(response);
    //   } catch (error) {
    //     console.error('Error loading data:', error);
    //   }
    // },
    ...mapActions(['loadData','updateShowOverlay']),
    formatDate(dateString) {
      return new Date(dateString).toLocaleString();
    },
    truncateText(text, maxLength) {
      if (!text) return '';
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    },
    handleImage(item) {
      console.error(`Error loading image for ${item.title}`);
      item.urlToImage = '../assets/news-image.jpg';
    },

  },
  created(){
    this.loadData();
  }
};
</script>

<style scoped>
.heading {
  font-size: 2.5rem;
  color: black; /* You can choose your own color */
  margin-bottom: 20px;
  font-weight: bold;
  font-style:italic;
  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a subtle text shadow for effect */
}
.img-fluid{
  width: 100%;
  height: 150px; 
  object-fit: cover;

}
.card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  height: 100%; 
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card:hover .card-overlay {
  background-color: black;
  opacity: 75%;
}

.card-content {
  background: linear-gradient(to bottom, #4de6ff, #8348f0);
  color: black;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
  flex: 1; 
  display: flex;
  flex-direction: column;
}
.card-footer {
  border-top: 1px solid #333; 
}

.card-title {
  margin-bottom: 8px;
  margin-left: 15px;
}
.card-body {
  flex: 1; 
  overflow: hidden; 
}

.read-more-button {
  background: linear-gradient(to right, #4de6ff, #610dff);
  border: 1px solid white;
  color: black;
  padding: 10px 20px;
  cursor: pointer;
  font-size: larger;
  border-radius: 5px;
  opacity: 100%;
  font-weight: 900;
}
</style>
