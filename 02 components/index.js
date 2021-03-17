Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

const app = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Queijo' },
      { id: 1, text: 'Leite' },
      { id: 2, text: 'Ovos' },
      { id: 3, text: 'Arroz' },
      { id: 4, text: 'Feijão' },
      { id: 5, text: 'Frango' },
      { id: 6, text: 'Mandioca' },
      { id: 7, text: 'Castanha de Caju' }
    ]
  }
});