<template>
    <footer>
      <nav class="navbar">
        <div class="container d-flex justify-content-center align-items-center">
          <a class="navbar-brand" href="#">
            <img src="../assets/news-logo.png" alt="Footer Logo" width="100">
          </a>
          <p>Copyright @ NewsInsights. All rights reserved.</p>
        </div>
      </nav>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  }
  </script>
  
  <style scoped>
    footer {
      background-color: black;
      /* padding: 20px 0; */
      color: #fff;
    }
  
    .navbar {
      border: none;
    }
  
    .navbar-brand {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }
  
    .navbar-brand img {
      max-width: 100px;
      margin-right: 100px;
    }
   

  </style>
  