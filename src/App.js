import React from 'react';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="john@gmail.com" phone="111-111-1111" />
    </div>
  );

}

export default App;
