import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'Hello!',
      todo: 'Todo List',
      add: 'Add Todo',
      placeholder: 'Enter a new task',
    },
  },
  ru: {
    message: {
      hello: 'Привет!',
      todo: 'Список дел',
      add: 'Добавить задачу',
      placeholder: 'Введите новую задачу',
    },
  },
};

const i18n = createI18n({
  locale: 'en', // Установите язык по умолчанию
  messages,
});

export default i18n;