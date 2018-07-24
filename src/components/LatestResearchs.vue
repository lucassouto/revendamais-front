<template>
  <ul>
    <li v-for="item in items" v-bind:key="item">
        <a v-bind:href="item.url">{{ item.search }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{  
      items: [
        {
            "search": "#lucassouto_1000",
            "url": "https://twitter.com/search?q=%23lucassouto_1000"
        },
        {
            "search": "#vuejs",
            "url": "https://twitter.com/search?q=%23vuejs"
        },
        {
            "search": "#python",
            "url": "https://twitter.com/search?q=%23python"
        }
      ]
    }
  }
}
</script>
