<template>
<div class="col-md-4">
  <div id="trends">
    <h3>Trends</h3>

    <b-card v-for="trend in trends" v-bind:key="trend">
      <a v-bind:href="trend.url">{{ trend.name }}</a>
    </b-card>
  </div>
</div>
</template>

<script>
import { getTrends } from '@/services/twitter'

export default {
  data () {
    return {
      trends: ''
    }
  },
  created () {
    getTrends()
      .then(data => {
        this.trends = data
      })
  }
}
</script>

<style scoped>
#trends {
  background: #E5EBF0;
  padding: 10px;
  margin: 10px;
}
</style>
