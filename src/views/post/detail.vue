<template>
  <div>
    <navbar />
    <div class="container">
      <md :md="item"></md>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/layout/navbar/navbar'
import postsMixin from '../../mixins/posts'
import md from '@/components/post/md/md'
export default {
  name: 'postDetail',
  components: { navbar, md },
  mixins: [postsMixin],
  data() {
    return {
      item: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.findItem()
    },
    findItem() {
      this.items.forEach(item => {
        if (this.$route.params.key === item.key) {
          this.item = item
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .item {
    min-width: 20rem;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 2.5rem;
    text-align: left;
    .title {
      padding-bottom: 10px;
      border-bottom: 1px solid #ebebeb;
    }
  }
</style>
<style>
  li {
    line-height: 200% !important;
  }
  pre {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #F0F0F0;
  }
</style>
