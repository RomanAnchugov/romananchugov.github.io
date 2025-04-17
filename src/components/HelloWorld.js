import React from 'react';
import './HelloWorld.css';

function HelloWorld({name}) {
  return (
    <section id="hello-world" className="hello-world">
      <div className="hello-text">HELLO WORLD, {name}</div>
    </section>
  );
}

export default HelloWorld; 