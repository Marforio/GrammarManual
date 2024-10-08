<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />
      <main role="main" class="col-md-8 ml-sm-auto col-lg-9 px-4 no-left-margin">
        <div class="content" id="content">
          <router-view />
        </div>
      </main>
      <nav class="col-md-2 bg-light sidebar sidebar-right">
        <div class="sidebar-sticky" id="sidebar-right">
          <!-- Navigation for h2 and h3 sections is generated here -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar.vue'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/script.js';

export default {
  components: { Sidebar }
}
</script>