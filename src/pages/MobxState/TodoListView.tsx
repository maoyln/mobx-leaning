import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// 定义 Todo 类
class Todo {
  id: number;
  title: string;
  finished: boolean;

  constructor(title: string) {
    this.id = Math.random(); // 简单生成唯一 ID
    this.title = title;
    this.finished = false;
    makeAutoObservable(this);
  }

  toggle() {
    this.finished = !this.finished;
  }
}

// 定义 TodoList 类
class TodoList {
  todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
    makeAutoObservable(this);
  }

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

// 定义组件的 Props 类型
interface TodoViewProps {
  todo: Todo;
}

interface TodoListViewProps {
  todoList: TodoList;
}

// TodoView 组件
const TodoView: React.FC<TodoViewProps> = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()} // 用 onChange 替代 onClick 更符合复选框语义
    />
    {todo.title}
  </li>
));

// TodoListView 组件
const TodoListView: React.FC<TodoListViewProps> = observer(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map(todo => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    <p>Tasks left: {todoList.unfinishedTodoCount}</p>
  </div>
));

// 封装为独立组件
const TodoApp: React.FC = () => {
  const store = new TodoList([
    new Todo("Get Coffee"),
    new Todo("Write simpler code"),
  ]);

  return <TodoListView todoList={store} />;
};

export default TodoApp;
