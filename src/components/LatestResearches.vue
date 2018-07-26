<template>
<div class="col-md-8">
  <div id="researchs">
    <h3>Researches</h3>

    <b-card v-for="item in items" v-bind:key="item">
      <a v-bind:href="item.url">{{ item.search }}</a>
    </b-card>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          'search': '#lucassouto_1000',
          'url': 'https://twitter.com/search?q=%23lucassouto_1000'
        },
        {
          'search': '#vuejs',
          'url': 'https://twitter.com/search?q=%23vuejs'
        },
        {
          'search': '#python',
          'url': 'https://twitter.com/search?q=%23python'
        }
      ]
    }
  }
}
</script>

<style scoped>
#researchs {
  background: #E5EBF0;
  padding: 10px;
  margin: 10px;
}
</style>
