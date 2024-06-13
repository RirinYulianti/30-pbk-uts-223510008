<template>
    <div class="container">
      <div class="card">
        <h1>Tudos List</h1>
        <div class="input-container">
          <input v-model="newTodo" type="text" placeholder="Tambahkan Tugas" />
          <button @click="addTodo">Tambahkan List</button>
        </div>
        <ul>
          <li v-for="(todo, index) in filteredTodos" :key="index" class="todo-item">
            <input type="checkbox" :checked="todo.completed" @change="() => toggleCompleted(index)" />
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
            <button @click="() => editTodoText(index, todo.text)">Edit</button>
            <button @click="() => deleteTodoConfirm(index)">Hapus</button>
          </li>
        </ul>
        <button @click="toggleFilter">
          {{ showCompleted ? 'Reset Filter' : 'Tampilkan List Selesai' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useTudosStore } from '../stores/tudos';
  import Swal from 'sweetalert2';
  
  const store = useTudosStore();
  const newTodo = ref('');
  
  const addTodo = () => {
    if (newTodo.value.trim() !== '') {
      store.addTodo(newTodo.value);
      newTodo.value = '';
    }
  };
  
  const toggleCompleted = (index) => {
    store.toggleCompleted(index);
  };
  
  const toggleFilter = () => {
    store.toggleFilter();
  };
  
  const deleteTodoConfirm = (index) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Anda tidak bisa mengembalikan data ini!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        store.deleteTodo(index);
        Swal.fire(
          'Dihapus!',
          'Tugas telah dihapus.',
          'success'
        )
      }
    })
  };
  
  const editTodoText = (index, oldText) => {
    Swal.fire({
      title: 'Edit Tugas',
      input: 'text',
      inputValue: oldText,
      showCancelButton: true,
      confirmButtonText: 'Simpan',
      cancelButtonText: 'Batal',
      inputValidator: (value) => {
        if (!value) {
          return 'Anda harus menulis sesuatu!'
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        store.editTodoText(index, result.value);
        Swal.fire(
          'Tersimpan!',
          'Tugas telah diperbarui.',
          'success'
        )
      }
    })
  };
  
  const filteredTodos = computed(() => {
    if (store.showCompleted) {
      return store.todos.filter(todo => todo.completed);
    }
    return store.todos;
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    background: rgba(226, 223, 223, 0.6);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 500px;
    font-family: "Chakra Petch", sans-serif;
  }
  
  .input-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    text-align: left;
  }
  
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  li .completed {
    text-decoration: line-through;
    color: #888;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .todo-item span {
    flex: 1;
  }
  
  .todo-item button {
    margin-left: 5px;
  }
  </style>
  