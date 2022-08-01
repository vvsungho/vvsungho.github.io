<template>
  <div>
    <b-navbar type="dark" variant="dark" class="fixed-header">
      <b-navbar-nav>
        <b-nav-item><img src="@/assets/profile2.jpeg" alt="" style="width: 30px; border-radius: 50%" @click="movePage('')"></b-nav-item>
        <b-nav-item :class="checkActiveMenu === 'home' ? 'font-weight-bold': ''" @click="movePage('home')">Home</b-nav-item>
        <!--        <b-nav-item :class="checkActiveMenu === 'about' ? 'font-weight-bold': ''" @click="movePage('about')">About</b-nav-item>-->
        <b-nav-item :class="checkActiveMenu === 'postList' || checkActiveMenu === 'postDetail' ? 'font-weight-bold': ''" @click="movePage('postList')">Post</b-nav-item>
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
  .fixed-header {
    //position:fixed;
    height: 64px;
    //width:100%;
    //margin-bottom: 64px !important;
    //top:0;
    //left:0;
    position: fixed;
    width: 100%;
    z-index: 9999;
    //margin-bottom: 64px;
  }
</style>
