import React from 'react';
import './App.css';
import Fetch from "./components/Fetch";
import Forms from "./components/Forms/Forms";
import MemeGenerator from "./components/Memegenerator/MemeGenerator";
import Header from "./components/Memegenerator/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <MemeGenerator/>
        </div>
    );
}

export default App;
