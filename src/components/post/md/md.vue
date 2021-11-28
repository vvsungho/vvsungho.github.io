<template>
  <div>
    <component v-if="md" :is="md"></component>
  </div>
</template>

<script>
import md1 from '@/assets/md/테스트 중 입니다.md'
export default {
  name: "md",
  components: {
  },
  data () {
    return {
      fileName: this.$route.params.key,
      md: null,
      md1: md1,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.md = require('../../../assets/md/' + this.fileName + '.md').default
      console.log('md', this.md)
    }
  }
}
</script>

<style scoped>

</style>
