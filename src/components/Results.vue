<template>
<div>
  <h3>Results</h3>

  <!-- <ul>
    <li v-for="item in items" v-bind:key="item">
        <a v-bind:href="item.url">{{ item.search }}</a>
    </li>
  </ul> -->

<b-list-group>
    <b-list-group-item v-for="item in items" v-bind:key="item">
        <a v-bind:href="item.url">{{ item.search }}</a>
    </b-list-group-item>
</b-list-group>  
</div>
</template>

<script>
export default {
  data(){
    return{  
      items: [
        {
            "search": "#test",
            "url": "https://twitter.com/search?q=%23test"
        },
        {
            "search": "#bic",
            "url": "https://twitter.com/search?q=%23bic"
        },
        {
            "search": "#acer",
            "url": "https://twitter.com/search?q=%23acer"
        }
      ]
    }
  }
}
</script>
