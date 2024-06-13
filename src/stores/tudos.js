// stores/tudos.js
import { defineStore } from 'pinia';

export const useTudosStore = defineStore('tudos', {
  state: () => ({
    todos: [
      { text: 'Organisasi', completed: false },
      { text: 'Membuat code', completed: false },
      { text: 'Menyelesaikan tugas', completed: true }
    ],
    showCompleted: false,
  }),
  actions: {
    addTodo(text) {
      this.todos.push({ text, completed: false });
    },
    toggleCompleted(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    toggleFilter() {
      this.showCompleted = !this.showCompleted;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodoText(index, newText) {
      this.todos[index].text = newText;
    }
  },
});
