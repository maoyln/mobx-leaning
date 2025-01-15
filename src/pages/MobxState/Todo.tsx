import { makeObservable, observable, action } from "mobx"

// https://zh.mobx.js.org/the-gist-of-mobx.html

class Todo {
    id: number = Math.random()
    title: string = ""
    finished: boolean = false

    constructor(title: string) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        })
        this.title = title
    }

    toggle() {
        this.finished = !this.finished
    }
}

export default Todo;