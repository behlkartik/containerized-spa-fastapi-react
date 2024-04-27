import ReactDOM from 'react-dom/client';
// import {useEffect, useState} from 'react';
import { Header } from './components/Header';
import Body from './components/Body';

const App = () =>{
    return (
        <div className='App'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
