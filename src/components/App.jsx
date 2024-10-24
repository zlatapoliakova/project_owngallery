import './App.css';

import React from 'react';

import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <h1>Welcome to Custom React App</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
