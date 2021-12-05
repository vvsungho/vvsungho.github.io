<template>
  <div>
    <navbar />
    <div class="container">
      <b-card class="recent-posts">
        <b-card-title>
          <span class="border-bottom" style="font-size: 30px">최근 포스트</span>
        </b-card-title>
        <b-card
            v-for="(item, index) in items.slice(0, 10)"
            :key="index"
            tag="article"
            class="mb-2 item"
        >
          <b-card-title @click="movePage('/post/' + item.key)" style="cursor: pointer; margin: 0">
            <div>
              <div class="text-center">
                <b-card-sub-title class="text-center" style="padding-bottom: 10px">
                <span>
                  <b-badge v-for="(tag, index) in item.tags" :key="index" variant="secondary" style="margin-right: 5px;  font-size: 13px; padding: 6px 10px">
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
        <!--        <b-card-->
        <!--            tag="article"-->
        <!--            class="mb-2 border-0"-->
        <!--        >-->
        <!--          <div class="w-100 text-center">-->
        <!--            <b-button variant="dark" size="sm" @click="movePage('/posts')" style="font-size: 15px">-->
        <!--              <font-awesome-icon :icon="['fa','plus']"/>&nbsp;-->
        <!--              더보기-->
        <!--            </b-button>-->
        <!--          </div>-->
        <!--        </b-card>-->
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
    movePage(path) {
      this.$router.push(path)
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
