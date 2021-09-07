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
                }
            } else {
                alert('Campo precisa ser preenchido!')
            }
        }
    },
}


Vue.createApp(todoList).mount('#app')