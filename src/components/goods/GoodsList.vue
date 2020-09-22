<template>
  <ul class="business">
    <!-- 传入 :item="e" -->
    <goods-item v-for="(e, i) in business" :key="i" :item="e" @click.native="businessItemClick"/>
  </ul>
</template>

<script>
  import GoodsItem from './GoodsItem'

  export default {
    components: {
      GoodsItem
    },
    props: {
      business: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      businessItemClick() {
        this.$router.push('/businessInfo')
      }
    }
  }
</script>

<style scoped>
  .business{
    width: 100%;
    /* margin-bottom: 14vw; */
    background-color: #fff;
  }
</style>