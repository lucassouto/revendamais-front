<template>
<div>
  <h3>{{ getTitleSearch }}</h3>

  <b-list-group>
      <b-list-group-item v-for="item in resultSearch.statuses" v-bind:key="item">
          {{ item.text }}
      </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
export default {
  computed: {
    getTitleSearch () {
      return this.$store.state.titleSearch
    },
    resultSearch () {
      return this.$store.state.itemsSearch
    }
  }
}
</script>
