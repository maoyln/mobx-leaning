import React from "react";
import { makeAutoObservable } from 'mobx'
import { observer } from "mobx-react";

class User {
  // 状态（成员属性）
  name: string = 'myl';
  age: number = 18;


  constructor() {
    // 可观察的对象
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // 计算属性-计算出生年份-get当作属性使用 computed
  get bornYear() {
    return new Date().getFullYear() - this.age
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
  // 此处不能解构 ,如果非要解构，需要修改上述代码makeAutoObservable(this, {}, { autoBind: true });
  const { name, age, bornYear, increaseAge, decrementAge } = store;
  return (
    <>
      <h2>姓名: {name}</h2>
      <h2>年龄: {age}</h2>
      <h2>出生年份: {bornYear}</h2>
      <button onClick={() => increaseAge()}>增加年龄</button>
      <button onClick={() => decrementAge()}>减少年龄</button>
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