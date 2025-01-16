import { makeAutoObservable } from 'mobx'

class User {
  // 状态（成员属性）
  name: string = 'myl'; // 初始化值
  age: number = 18;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // 可观察的对象-autoBind可以支持解构，否则解构之后找不到this指向
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
// const user: User = new User('fj', 20);

export default User;