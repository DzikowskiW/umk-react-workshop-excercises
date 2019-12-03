import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <section className="section">
        <div className="container">
            <Weather />
        </div>
    </section>
  );
}

export default App;
