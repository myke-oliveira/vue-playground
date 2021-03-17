const app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Olá vue!'
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Você carregou esta página em ' + new Date().toLocaleString(),
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Aprender JavaScript' },
      { text: 'Aprender Vue' },
      { text: 'Criar algo incrível' }
    ]
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Bora inverter essa mensagem',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
})