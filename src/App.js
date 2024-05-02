// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TimerPage from './components/Timer';
import WelcomeBack from './components/WelcomeBack'; // 导入新组件

function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/welcome-back" element={<WelcomeBack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
