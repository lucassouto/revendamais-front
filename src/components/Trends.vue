<template>
<div>
  <h3>Trends</h3>

  <ul>
    <li v-for="item in trends" v-bind:key="item">
        <a v-bind:href="item.url">{{ item.name }}</a>
    </li>
  </ul>

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