<template>
  <div>
    <navbar />
    <div class="container">
      <b-card
          img-top
          tag="article"
          style="min-width: 20rem; width: 100%; border: none;"
          class="mb-2 text-center"
      >
        <b-card-title>About</b-card-title>
        <img data-v-e7ab893a="" src="../assets/profile2.jpeg" alt="Image" class="card-img-top" style="width: 300px; border-radius: 40%">
        <b-card-text>
          윤성호
        </b-card-text>
        <b-card-text>
          Vue.js를 사용하였습니다.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import navbar from '@/views/layout/navbar/navbar'
export default {
  name: 'about',
  components: { navbar }
}
</script>

<style scoped>
</style>
