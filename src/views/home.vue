<template>
  <div>
    <navbar />
    <div class="container">
      <b-card class="recent-posts">
        <b-card-title>
          <span class="border-bottom">Recent Posts</span>
        </b-card-title>
        <b-card
            v-for="(item, index) in items.slice(0, 5)"
            :key="index"
            tag="article"
            class="mb-2 item"
        >
          <b-card-title @click="goDetail(item.key)" style="cursor: pointer; margin: 0">
            <div>
              <div class="text-center">
                <b-card-sub-title class="text-center" style="padding-bottom: 10px">
                <span>
                  <b-badge v-for="(tag, index) in item.tags" :key="index" variant="primary" style="margin-right: 5px">
                    {{ tag }}
                  </b-badge>
                </span>
                </b-card-sub-title>
                <span>
                  {{ item.title }}
                </span>
              </div>
            </div>
          </b-card-title>
          <!--        <b-card-text v-html="item.content" class="text-left text-hidden"/>-->
        </b-card>
      </b-card>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/layout/navbar/navbar'
import postsMixin from "@/mixins/posts"
export default {
  name: 'home',
  components: {
    navbar
  },
  mixins: [postsMixin],
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
  //padding-bottom: 2.5rem;
  }
  .recent-posts {
    border: 0;
    text-align: left;
  }
</style>
