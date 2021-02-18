<template>
  <div>
    <navbar />
    <div class="container">
      <b-card
          tag="article"
          class="mb-2 item"
      >
        <b-card-text v-if="item.tags.length > 0">
          <b-badge
            v-for="(tag, index) in item.tags"
            :key="index"
            variant="secondary"
            class="margin-r-5"
            style="font-size: 15px; padding: 9px 12px"
          >
            {{ tag }}
          </b-badge>
        </b-card-text>
        <b-card-title class="title" style="cursor: pointer">
          <h2>{{ item.title }}</h2>
        </b-card-title>
        <b-card-text>
          <div v-html="item.content" />
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/layout/navbar/navbar'
import postsMixin from '../../mixins/posts'
export default {
  name: 'postDetail',
  components: { navbar },
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
</style>
