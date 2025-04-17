import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Roman"/>
    </div>
  );
}

export default App; 