<template>
  <div class="container">
    <h1>Album Detail</h1>
    <div class="image-container">
      <img :src="photo.url" :alt="photo.title" />
    </div>
    <p>{{ photo.title }}</p>
    <button @click="goBack" class="back-button">⟨</button>
  </div>
</template>

<script>
import axios from 'axios';
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const photo = ref({});
    const route = useRoute();
    const router = useRouter();

    const fetchPhoto = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`);
      photo.value = response.data;
    };

    const goBack = () => {
      router.push('/albums');
    };

    onMounted(fetchPhoto);

    return {
      photo,
      goBack
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

.container {
  max-width: 800px;
  margin: 50px auto;
  background: rgba(226, 223, 223, 0.6);
  border-radius: 5px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  font-family: "Chakra Petch", sans-serif;
}
h1 {
  text-align: center;
}
.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
p {
  text-align: center;
}
.back-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  text-align: center;
}
.back-button:hover {
  background-color: #0056b3;
}
</style>
