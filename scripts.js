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
        tasks: window.tasks,
        newTask: {
            done: false
        }
      }
    },
    methods: {
        addTask: function () {
            if (this.newTask.title) {
                this.tasks.push(this.newTask);
                this.newTask = {
                    done: false
                }
            } else {
                alert('Campo precisa ser preenchido!')
            }
        }
    },
}


Vue.createApp(todoList).mount('#app')