import React from "react";
import { makeAutoObservable } from 'mobx'
import { observer } from "mobx-react";

class User {
  // 状态（成员属性）
  name: string = 'myl';
  age: number = 18;

  constructor() {
    // 可观察的对象
    makeAutoObservable(this);
  }

  // 动作方法
  changeName(name: string) {
    this.name = name;
  }

  // 动作方法
  increaseAge() {
    this.age++;
  }

  // 动作方法
  decrementAge() {
    this.age--;
  }
}

// 得到一个可以被观察的示例对象
const user: User = new User();

interface MyComponentProps {
  store: User;
}

// 创建一个有观察能力的组件
const MyComponent: React.FC<MyComponentProps> = observer(({ store }) => {
  return (
    <>
      <h2>姓名: {store.name}</h2>
      <h2>年龄: {store.age}</h2>
      <button onClick={() => store.increaseAge()}>增加年龄</button>
      <button onClick={() => store.decrementAge()}>减少年龄</button>
    </>
  );
});

console.log(user);

const MobxDemo1: React.FC = () => {
  return (
    <div>
      <h1>MobxDemo1</h1>
      <MyComponent store={user} />
    </div>
  );
};

export default MobxDemo1;