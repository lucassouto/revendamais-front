<template>
  <b-nav-form>
    <b-form-input
      v-model="term"
      size="sm"
      class="mr-sm-2"
      type="text"
      placeholder="Search"/>

    <router-link to="/results">
    <b-button v-if="term !== '' && term.length > 2"
      @click="fetchTwitter"
      size="sm"
      class="my-2 my-sm-0"
      >Search</b-button>
    </router-link>
  </b-nav-form>
</template>

<script>
import { getSearch } from '@/services/twitter'

export default {
  name: 'Search',
  data () {
    return {
      term: ''
    }
  },
  methods: {
    fetchTwitter () {
      this.$store.dispatch('clearResults')

      getSearch(encodeURIComponent(this.term))
        .then(data => {
          this.$store.dispatch('resultsSearch', data)
          this.$store.dispatch('setTitleSearch', this.term)
        })
    },
    validatorSearch () {
      if (this.term !== '' && this.term.length > 2) {
        return true
      }
    }
  }

}
</script>
