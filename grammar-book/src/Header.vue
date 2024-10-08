<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Grammar Book</a>
        <div class="navbar-nav ml-auto">
            <i class="fas fa-bars navbar-icon"></i>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
            <select class="dropdown form-control ml-2">
                <option value="">Select Chapter</option>
            </select>
        </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>