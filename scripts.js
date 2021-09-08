var tasks = [];

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
                };
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            } else {
                alert('Campo precisa ser preenchido!')
            }
        },
        storeTodos() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    created() {
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : this.tasks;
    },
    updated() {
        //localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
}


Vue.createApp(todoList).mount('#app')