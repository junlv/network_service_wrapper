<template>
  <div id="app" v-loading.body="isLoading">
    <div id="nav">
      {{ news }}
    </div>
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Service from '@/api/post.service.js'


export default {
  components: {
  
  },
  name: 'app',
  data () {
    return {
      news: null
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    requestNews () {
        let self = this
        Service.fetch('secret/secretsmyfollow')
        .then((data) => {
          console.log(data)
          self.news = data.data.news
        }).catch((err)=>{
          console.warn(err)
        })
    },
  },
  mounted () {
     this.requestNews()
  },
  created () {
  }
}
</script>



<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
