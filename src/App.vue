<template>
  <div id="app">
    <div id="nav">
      {{ news }}
    </div>
    <router-view/>
  </div>
</template>

<script>

// import { mapGetters } from 'vuex'
import TestNewsService from '@/api/TestNewsService'


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

  },
  methods: {
   
    requestNews () {
      let self = this
      // this.$Loading()
      this.testNewsService.token(false)
        .request({
          
        })
        .then((data) => {
          // self.$Loading.done()
          console.log(data)
          self.news = data.data.news
        })
        .catch(err => {
          console.log(err.msg)
          // self.$Loading.done()
        })
    },
  },
  mounted () {
     this.requestNews()
  },
  created () {
     this.testNewsService = new TestNewsService()
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
