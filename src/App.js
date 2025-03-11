import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather defaultCity="New York"/>
        
        <footer>
          Coded by Datali-Dew and its {""}
          <a
            className="GitHub-link"
            href="https://github.com/Datdew/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


