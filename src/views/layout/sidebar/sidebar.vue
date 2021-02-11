<template>
  <bootstrap-sidebar
      :initial-show="initialShow"
      :links="links"
      :header="header"
      :fa="true"
      @sidebarChanged="onSidebarChanged"
  >
    <template v-slot:navbar>
      <b-navbar
          id="mainNavbar"
          toggleable="lg"
          type="light"
          variant="light"
          fixed="top"
      >
        <b-navbar-nav>
          <b-nav-item>
            vvsungho
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </template>

    <template v-slot:content>
      <b-container style="margin-top: 56px">
        <router-view />
      </b-container>
    </template>
  </bootstrap-sidebar>
</template>

<script>
import BootstrapSidebar from 'vue-bootstrap-sidebar'
export default {
  name: 'sidebafont-awesome-icon',
  components: {
    BootstrapSidebar
  },
  data () {
    return {
      initialShow: true,
      header: '<h3>vvsungho</h3>',
      links: [
        {name: 'Home', href: {name: 'home'}, faIcon: ['fas', 'home']},
        {
          name: 'Dropdown',
          faIcon: ['fas', 'tint'],
          children: [
            {
              name: 'Child Item 1',
              href: {
                name: 'child-item-1'
              },
              faIcon: ['fas', 'child']
            },
            {
              name: 'Child Item 2',
              href: {
                name: 'child-item-2'
              },
              faIcon: ['fas', 'child']
            }
          ]
        },
        {name: 'About', href: {name: 'about'}, faIcon: 'users'},
        {name: 'Contact', href: {name: 'contact'}, faIcon: 'phone'}
      ]
    }
  },
  methods: {
    onSidebarChanged () {
    }
  }
}
</script>

<style scoped>

</style>
