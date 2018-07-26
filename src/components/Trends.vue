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
export default {
  data(){
    return{
      trends: [
        {
            "name": "#ChainedToTheRhythm",
            "url": "http://twitter.com/search?q=%23ChainedToTheRhythm"
        },
        {
            "name": "#wednesdaywisdom",
            "url": "https://twitter.com/search?q=%23wednesdaywisdom"
        },
        {
            "name": "Tara Palmer-Tomkinson",
            "url": "http://twitter.com/search?q=%22Tara+Palmer-Tomkinson%22"
        }
      ]
    }
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
