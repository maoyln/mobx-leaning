import React from "react";
import { observer } from "mobx-react";
import User from '../store/User';
import { useRootStore } from '../store'

interface MyComponentProps {
  store?: User;
}

// 创建一个有观察能力的组件
const MyComponent: React.FC<MyComponentProps> = observer(() => {
  const { user } = useRootStore()
  // 此处不能解构 ,如果非要解构，需要修改上述代码makeAutoObservable(this, {}, { autoBind: true });
  const { name, age, bornYear, increaseAge, decrementAge } = user;
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

export default MyComponent;