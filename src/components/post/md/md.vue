<template>
  <div>
    <component v-if="md" :is="md"></component>
  </div>
</template>

<script>
export default {
  name: "md",
  components: {
  },
  data () {
    return {
      fileName: this.$route.params.key,
      md: null
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
