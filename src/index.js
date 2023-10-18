import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import ProvideUsernameContext from './contexts/UserContext'
import SignInContext from './contexts/SignInContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ProvideUsernameContext>
            <SignInContext>
                <App />
            </SignInContext>
        </ProvideUsernameContext>
    </BrowserRouter>
);
