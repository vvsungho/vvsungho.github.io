<template>
  <div>
    <navbar />
    <div class="container" style="margin-bottom: 20px">
      <b-card
          tag="article"
          class="mb-2 item"
      >
        <b-card-title style="font-size: 30px">Post</b-card-title>
        <b-card-body>
          <b-badge v-for="(tag, index) in tags" :key="index" variant="secondary" style="margin: 10px; font-size: 15px; padding: 12px 20px; cursor: pointer" @click="doTagSearch(tag)">
            {{ tag }}
          </b-badge>
        </b-card-body>
      </b-card>
      <b-card
          v-for="(item, index) in viewItems"
          :key="index"
          tag="article"
          class="mb-2 item"
      >
        <b-card-title @click="goDetail(item.key)" style="cursor: pointer; margin: 0">
          <div>
            <b-card-sub-title class="text-center" style="padding-bottom: 10px">
              <b-badge v-for="(tag, index) in item.tags" :key="index" variant="secondary" style="margin-right: 5px; font-size: 13px; padding: 6px 10px">
                {{ tag }}
              </b-badge>
            </b-card-sub-title>
            {{ item.title }}
          </div>
        </b-card-title>
        <!--        <b-card-text v-html="item.content" class="text-left text-hidden"/>-->
      </b-card>
    </div>
    <md></md>
  </div>
</template>

<script>
import navbar from '@/views/layout/navbar/navbar'
import postsMixin from '../../mixins/posts'
import md from "@/components/post/md/md"
export default {
  name: 'list',
  components: { navbar, md },
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
  //padding-bottom: 2.5rem;
}
.text-hidden {
  //max-height: 200px;
  white-space: nowrap;
  overflow: hidden;
}
</style>
