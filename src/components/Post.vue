<template>
    <div class="container">
      <h1>Post</h1>
      <select @change="fetchUserData($event)">
        <option value="">None</option>
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.username }}</option>
      </select>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    setup() {
      const users = ref([]);
      
      const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        users.value = response.data;
      };
  
      const fetchUserData = async (event) => {
        const userId = event.target.value;
        if (userId) {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
          Swal.fire({
            title: 'User Data',
            html: `<pre>${JSON.stringify(response.data, null, 2)}</pre>`,
            icon: 'info'
          });
        }
      };
  
      onMounted(fetchUsers);
  
      return {
        users,
        fetchUserData
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
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    font-family: "Chakra Petch", sans-serif;
  }
  h1 {
    text-align: center;
  }
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
  </style>
  