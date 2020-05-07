import React from 'react';
import Contact from './components/Contact'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
      <Contact name="John Doe" email="john@gmail.com" phone="111-111-1111" />
      <Contact name="Mary Doe" email="mary@gmail.com" phone="222-222-2222" />
      </div>
      
    </div>
  );

}

export default App;
