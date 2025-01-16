import React, { createContext, ReactNode, useContext } from "react";
import User from './User';
// ...拓展

class RootStore {
  user: User;
  constructor () {
    this.user = new User();
    // ...拓展
  }
}

// 
const rootStore = new RootStore();

interface RootStoreProviderProps {
  children: ReactNode; // children 是 ReactNode 类型，代表任何有效的 React 子元素
}

// 创建一个上下文对象，并封装成一个组件
const RootStoreContext = createContext(rootStore);

const RootStoreProvider: React.FC<RootStoreProviderProps> = ({children}) => {
  return <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
};

export default RootStoreProvider;


// 3.封装一个获取上下文数据的方法
export const useRootStore = () => {
  return useContext(RootStoreContext)
};
