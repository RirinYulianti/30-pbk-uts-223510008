// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Tudos from '../components/Tudos.vue';
import Post from '../components/Post.vue';
import Album from '../components/Album.vue';
import AlbumDetail from '../components/AlbumDetail.vue';

const routes = [
  { path: '/', redirect: '/tudos' },
  { path: '/tudos', component: Tudos },
  { path: '/post', component: Post },
  { path: '/albums', component: Album },
  { path: '/albums/:id', component: AlbumDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
