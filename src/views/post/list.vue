<template>
  <div>
    <navbar />
    <div class="contents">
      <div v-for="(name, index) in fileNames" :key="index" class="title">
        <div @click="goDetail(name)">{{ name }}</div>
      </div>
    </div>
      <!--    <div class="container" style="margin-bottom: 20px">-->
      <!--      <b-card-->
      <!--          tag="article"-->
      <!--          class="mb-2 item"-->
      <!--      >-->
      <!--        <b-card-title style="font-size: 30px">Posts</b-card-title>-->
      <!--        <b-card-bady>-->
      <!--          <b-badge v-for="(tag, index) in tags" :key="index" variant="secondary" style="margin: 10px; font-size: 20px; padding: 12px 20px; cursor: pointer" @click="doTagSearch(tag)">-->
      <!--            {{ tag }}-->
      <!--          </b-badge>-->
      <!--        </b-card-bady>-->
      <!--      </b-card>-->
      <!--      <b-card-->
      <!--          v-for="(item, index) in viewItems"-->
      <!--          :key="index"-->
      <!--          tag="article"-->
      <!--          class="mb-2 item"-->
      <!--      >-->
      <!--        <b-card-title @click="goDetail(item.key)" style="cursor: pointer; margin: 0">-->
      <!--          <div>-->
      <!--            <b-card-sub-title class="text-center" style="padding-bottom: 10px">-->
      <!--              <b-badge v-for="(tag, index) in item.tags" :key="index" variant="secondary" style="margin-right: 5px; font-size: 13px; padding: 6px 10px">-->
      <!--                {{ tag }}-->
      <!--              </b-badge>-->
      <!--            </b-card-sub-title>-->
      <!--            {{ item.title }}-->
      <!--          </div>-->
      <!--        </b-card-title>-->
      <!--        &lt;!&ndash;        <b-card-text v-html="item.content" class="text-left text-hidden"/>&ndash;&gt;-->
      <!--      </b-card>-->
      <!--    </div>-->
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
    return {
      fileNames: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const requireModule = require.context("../../assets/md", false, /\.md$/)
      const modules = {}
      this.fileNames = []
      requireModule.keys().forEach(fileName => {
        const moduleName = fileName.replace(/(\.\/|\.$)/g, "") //
        this.fileNames.push(moduleName.replace('.md', ''))
        modules[moduleName] = requireModule(fileName).default
      })
    },
    goDetail(name) {
      this.$router.push('/post/' + name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .contents {
    padding-top: 64px;
    text-align: center;
    .title {
      cursor: pointer;
      padding-top: 10px;
      width: 100%;
      text-align: center;
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
</style>
