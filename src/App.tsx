import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCounter from "./CharacterCounter";

function App() {

    const sum = (...args: number[]): number => args.reduce((cur, acc) => {
        return cur + acc
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button onClick={() => {
                    console.log(sum(1, 2, 3, 4, 5));
                }}
                >테스트
                </button>
                <CharacterCounter/>
            </header>
        </div>
    );
}

export default App;
