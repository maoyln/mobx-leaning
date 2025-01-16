import React from "react";

class User {
  // 状态（成员属性）
  private name: string = 'myl';
  private age: number = 18;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
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

const user = new User('myl', 18);

console.log(user);

const MobxDemo1: React.FC = () => {
  return (
    <div>
      <h1>MobxDemo1</h1>
    </div>
  );
};

export default MobxDemo1;