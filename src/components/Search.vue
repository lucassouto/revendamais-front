<template>
  <b-nav-form>
    <b-form-input
      v-model="query"
      size="sm"
      class="mr-sm-2"
      type="text"
      placeholder="Search"/>

    <b-button
      @click="fetchTwitter"
      size="sm"
      class="my-2 my-sm-0"
      >Search</b-button>
  </b-nav-form>
</template>

<script>
import { getSearch } from '@/services/twitter'

export default {
  name: 'Search',
  data () {
    return {
      query: ''
    }
  },
  methods:{
  fetchTwitter(){
    getSearch(encodeURIComponent(this.query))
      .then(data => {
        this.$store.dispatch('resultsSearch', data)
        this.$store.dispatch('setTitleSearch', this.query)
    })
  }
}

}
</script>
