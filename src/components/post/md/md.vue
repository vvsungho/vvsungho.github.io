<template>
  <div class="md">
    <component v-if="md" :is="md.content"></component>
    <!--    <highlight-code lang="java">-->
    <!--      <component v-if="md" :is="md.content"></component>-->
    <!--    </highlight-code>-->
  </div>
</template>

<script>
// import { component as VueCodeHighlight } from 'vue-code-highlight'
export default {
  name: "md",
  components: {
    // VueCodeHighlight
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
