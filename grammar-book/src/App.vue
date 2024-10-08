<template>
  <body>
  <div id="app">
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </div>
  </body>
</template>


<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Home from './views/Home.vue'
import Sidebar from './Sidebar.vue'

export default {
  components: { Header, Footer, Home }
}
</script>