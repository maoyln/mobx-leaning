import React from 'react';
import { Link } from 'react-router-dom';

// 示例：在 HomePage 中添加导航
const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <nav>
        <Link to="/about">Go to About Page</Link>
      </nav>
    </div>
  );
};

export default HomePage;
