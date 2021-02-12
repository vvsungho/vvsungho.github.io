<template>
  <div>
    <navbar />
    <div class="container">
      <b-card
          v-for="(item, index) in items"
          :key="index"
          tag="article"
          class="mb-2 item"
      >
        <b-card-title @click="goDetail(item.key)" style="cursor: pointer">
          {{ item.title }}
        </b-card-title>
        <b-card-text>
          {{ item.content }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/layout/navbar/navbar'
import postsMixin from '../../mixins/posts'
export default {
  name: 'list',
  components: { navbar },
  mixins: [postsMixin],
  data() {
    return {}
  },
  methods: {
    goDetail(key) {
      this.$router.push('/post/' + key)
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
  }
</style>
