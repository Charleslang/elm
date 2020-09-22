<template>
  <div id="home">
    <home-header/>
    <home-header-search/>
    <home-category @categoryClick="categoryClick"/>
    <home-banner/>
    <super-member/>
    <recommed-merchants/>
    <recommed-mode/>
    <goods-list :business="business"/>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeHeaderSearch from './components/HomeHeaderSearch'
  import HomeCategory from './components/HomeCategory'
  import HomeBanner from './components/HomeBanner'
  import SuperMember from './components/SuperMember'
  import RecommedMerchants from './components/RecommedMerchants'
  import RecommedMode from './components/RecommedMode'
  
  import GoodsList from 'components/goods/GoodsList'

  export default {
    components: {
      HomeHeader,
      HomeHeaderSearch,
      HomeCategory,
      HomeBanner,
      SuperMember,
      RecommedMerchants,
      RecommedMode,
      GoodsList
    },
    data() {
      return {
        business: []
      }
    },
    created() {
      this.listBusiness()
    },
    methods: {
      listBusiness() {
        // listBusiness().then(res => {
        //   if (res.code === 200) {
        //     this.business = res.data
        //   } else {
        //     alert(res.message)
        //   }
        // }, err => {
        //   alert(err.message)
        // })
      },
      categoryClick(typeId) {
        console.log(typeId)
        this.$router.push('/category/' + typeId)
      }
    }
  }
</script>

<style scoped>

</style>