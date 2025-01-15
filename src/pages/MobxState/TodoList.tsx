import { makeObservable, observable, computed } from "mobx"

// https://zh.mobx.js.org/the-gist-of-mobx.html
class TodoList {
    todos: {finished: boolean}[] = []
    get unfinishedTodoCount() {
        return this.todos.filter((todo: {finished: boolean}) => !todo.finished).length
    }
    constructor(todos: {finished: boolean}[]) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })
        this.todos = todos
    }
}

export default TodoList;