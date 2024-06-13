<template>
    <div class="container">
      <h1>Album</h1>
      <div class="gallery">
        <img v-for="photo in photos" :key="photo.id" :src="photo.thumbnailUrl" @click="showPhoto(photo)" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const photos = ref([]);
      const router = useRouter();
  
      const fetchPhotos = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=18');
        photos.value = response.data;
      };
  
      const showPhoto = (photo) => {
        router.push(`/albums/${photo.id}`);
      };
  
      onMounted(fetchPhotos);
  
      return {
        photos,
        showPhoto
      };
    }
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

  .container {
    max-width: 600px;
    margin: 30px auto;
    background: rgba(226, 223, 223, 0.6);
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    font-family: "Chakra Petch", sans-serif;
  }
  h1 {
    text-align: center;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
  }
  </style>
  