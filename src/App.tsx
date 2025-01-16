import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import TodoListView from './pages/MobxState/TodoListView';
import MobxDemo1 from './pages/01MobxDemo/MobxDemo1';
import MyComponent from './pages/02MobxDemo/MyComponent';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 配置路由 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/todoListView" element={<TodoListView />} />
        <Route path="/mobxDemo1" element={<MobxDemo1 />} />
        <Route path="/myComponent" element={<MyComponent />} />    
        <Route path="*" element={<NotFoundPage />} /> {/* 404 路由 */}
      </Routes>
    </Router>
  );
};

export default App;
