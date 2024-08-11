<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
            <div class="col">
                <h1>{{ $t('message.todo') }}</h1>
            </div>
            <div class="col d-flex" style="gap: 10px">
                <button class="btn btn-primary" @click="switchLanguage('en')">English</button>
                <button class="btn btn-success" @click="switchLanguage('ru')">Русский</button>
            </div>
        </div>
        </div>

        <div class="card">
            <div class="card-body text-center d-flex">
                <input class="form-control" v-model="newTodo" :placeholder="$t('message.placeholder')" />
                <button class="btn btn-primary" style="font-size: 14px" @click="addTodo">{{ $t('message.add') }}</button>
            </div>
        </div>
        </div>

      <ul>
        <div class="card">
            <div class="card-body w-100">
        <li v-for="(todo, index) in todos" :key="index" style="padding: 10px">
            <div class="d-flex" style="gap: 10px">
                <input v-model="todo.text" class="form-control"/>
                <button @click="removeTodo(index)" class="btn btn-danger">Удалить</button>
            </div>
        </li>
    </div>
</div>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: '',
        todos: this.loadTodos(),
      };
    },
    methods: {
      loadTodos() {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
      },
      saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push({ text: this.newTodo.trim() });
          this.newTodo = '';
          this.saveTodos();
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
        this.saveTodos();
      },
      switchLanguage(lang) {
    this.$i18n.locale = lang;
  },
    },
    watch: {
      todos: {
        handler() {
          this.saveTodos();
        },
        deep: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Добавьте стили по желанию */
  </style>