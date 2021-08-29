var tasks = [
    {
        "title": "Aprender HTML, CSS e Javascript",
        "done": true,
    },
    {
        "title": "Aprender o básico de Vue JS",
        "done": true,
    },
    {
        "title": "Completar o desafio de Vue JS com excelência",
        "done": false,
    }
];


const todoList = {
    data() {
      return {
        tasks: window.tasks
      }
    },
    methods: {},
}


Vue.createApp(todoList).mount('#app')