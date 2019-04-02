new Vue({
    el: '#todo-app',
    data: {
        todoItems: [],
        newItem: null
    },
    computed: {
        todoIsEmpty() {
            return this.todoItems.length === 0;
        }
    },
    methods: {
        addTodo() {
            this.todoItems.push(this.createTodo(this.newItem));
            this.newItem = null;
        },
        removeTodo(index) {
            this.todoItems.splice(index, 1);
        },
        createTodo(value) {
            return {
                value: value,
                isDone: false,
            }
        }
    }
});
