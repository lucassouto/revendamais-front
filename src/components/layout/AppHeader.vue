<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">Twitter</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <search></search>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Header',
  components:{
    Search
  }
}
</script>