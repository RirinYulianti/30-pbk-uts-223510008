<template>
  <div>
    <q-layout>
      <q-header elevated style="background-color: darkslategray;">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn flat label="Tudos" :to="{ path: '/tudos' }" :class="{ active: $route.path === '/tudos' }"></q-btn>
            <q-btn flat label="Post" :to="{ path: '/post' }" :class="{ active: $route.path === '/post' }"></q-btn>
            <q-btn flat label="Album" :to="{ path: '/albums' }" :class="{ active: $route.path === '/albums' }"></q-btn>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.active {
  color: #42b983;
  font-weight: bold;
}
.q-layout {
  background-image: linear-gradient(to right bottom, #52716d, #3c8e7b, #27aa7d, #2cc573, #52df5c, #50e15a, #4de258, #4be456, #00ce6e, #00b77c, #009f80, #00867b);
}
</style>
