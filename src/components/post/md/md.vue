<template>
  <div class="md">
    <component v-if="md" :is="md.content"></component>
  </div>
</template>

<script>
export default {
  name: "md",
  components: {
  },
  props: {
    md: {
      type: Object,
      default: () => null
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .md {
    padding-top: 15px;
    text-align: left;
  }
</style>
