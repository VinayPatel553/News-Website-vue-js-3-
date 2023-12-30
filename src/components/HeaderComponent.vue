<template>
    <div>
      <div class="logo-container">
        <img src="../assets/news-logo.png" alt="Logo" width="150">
      </div>
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
          <li v-on:click="updateCategory('general')"><a class="navbar-brand p-2 border border-white rounded" style="color: white; font-size: 22px;" href="#">Home</a></li>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-1">
              <li class="nav-item" v-on:click="updateCategory('business')">
                <a class="nav-link " style="color: #2ecc71;" href="#">Business</a>
              </li>
              <li class="nav-item" v-on:click="updateCategory('technology')">
                <a class="nav-link " style="color: #e74c3c;" href="#">Technology</a>
              </li>
              <li class="nav-item" v-on:click="updateCategory('science')">
                <a class="nav-link " style="color: #3498db;" href="#">Science</a>
              </li>
              <li class="nav-item" v-on:click="updateCategory('health')">
                <a class="nav-link" style="color: #9b59b6;" href="#">Health</a>
              </li>
              <li class="nav-item" v-on:click="updateCategory('sports')">
                <a class="nav-link" style="color: #e67e22;" aria-current="page" href="#">Sports</a>
              </li>
            </ul>
            <!-- <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchText">
              <button class="btn btn-outline-success" type="submit" v-on:click="updateSearch">Search</button>
            </form> -->
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import {mapActions} from 'vuex';
  export default {
    name: 'HeaderComponent',
    methods:{
      ...mapActions(['updateCategory']),
    }
  }
  </script>
  
  <style scoped>
    .logo-container {
      text-align: center;
      background-color: black;
    }
  
    .navbar {
      background-color: #000; 
    }
    .navbar-toggler-icon {
      background-color: #fff;
    }
    .navbar a.navbar-brand:hover,
    .navbar a.nav-link:hover {
      background-color: #333; 
    }
    .nav-link{
        font-size: 20px;
        margin-left: 50px;
        padding: 2px;
    }
  </style>