<template>
  <div class="container">
    <h1 style="font-weight: bold; color: black; font-size: 70px; margin-bottom: 50px;">Todolist</h1>
    <input type="text" v-model="newActivity" @keyup.enter="addActivity" placeholder="Tambahkan kegiatan...">
    <ul>
      <li v-for="(activity, index) in filteredActivities" :key="index">
        <input type="checkbox" v-model="activity.completed">
        <span :class="{ 'completed': activity.completed }">{{ activity.name }}</span>
        <button @click="removeActivity(index)">Hapus</button>
      </li>
    </ul>
    <label><input type="checkbox" v-model="showCompleted"> Tampilkan Selesai</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newActivity: '',
      activities: [],
      showCompleted: false
    };
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ name: this.newActivity, completed: false });
        this.newActivity = '';
      }
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    }
  },
  computed: {
    filteredActivities() {
      if (this.showCompleted) {
        return this.activities;
      } else {
        return this.activities.filter(activity => !activity.completed);
      }
    }
  }
};
</script>

<style scoped>
/* CSS untuk tampilan yang enak dipandang mata */
.container {
  max-width: 600px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  
}
h1 {
  text-align: center;
}
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
li:last-child {
  border-bottom: none;
}
input[type="checkbox"] {
  margin-right: 10px;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
