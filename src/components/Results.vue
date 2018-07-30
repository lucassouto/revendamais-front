<template>
<div
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="busy"
  infinite-scroll-distance="20"
  infinite-scroll-immediate-check="flase">

  <h3>{{ getTitleSearch }}</h3>
  <b-list-group v-for="(x, index) in resultSearch" v-bind:key="index">
      <b-list-group-item v-for="(item, index) in x.statuses" v-bind:key="index">
          {{ item.text }}
      </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
import { getSearchNext } from '@/services/twitter'

export default {
  data () {
    return {
      busy: false
    }
  },
  computed: {
    getTitleSearch () {
      return this.$store.state.titleSearch
    },
    resultSearch () {
      return this.$store.state.itemsSearch
    },
    nextResults () {
      return this.$store.getters.nextResults
    }
  },
  methods: {
    loadMore: function () {
      this.busy = true

      setTimeout(() => {
        getSearchNext(this.nextResults)
          .then(data => {
            this.$store.dispatch('scrollResults', data)
          })
        this.busy = false
      }, 1000)
    }
  }
}
</script>
