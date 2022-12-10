import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Auth from "./Auth"

function App() {
  return (
      <div className="App">
          <p>Hello</p>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
