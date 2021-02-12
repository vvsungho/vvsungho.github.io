<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :class="checkActiveMenu === 'home' ? 'font-weight-bold': ''" @click="movePage('home')">Home</b-nav-item>
        <b-nav-item :class="checkActiveMenu === 'about' ? 'font-weight-bold': ''" @click="movePage('about')">About</b-nav-item>
        <b-nav-item :class="checkActiveMenu === 'posts' || checkActiveMenu === 'postDetail' ? 'font-weight-bold': ''" @click="movePage('posts')">Posts</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'sidebafont-awesome-icon',
  data () {
    return {
    }
  },
  computed: {
    checkActiveMenu () {
      return this.$route.name
    }
  },
  methods: {
    movePage(name) {
      if (this.$route.name === name) {
        return false
      }
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="scss" scoped>
  .font-weight-bold {
    a {
      font-weight: bold !important;
      color: #ffffff !important;
    }
  }
</style>
