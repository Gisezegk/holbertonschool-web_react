// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global CSS if needed
import App from './App';
import Notifications from './Notifications'; // Import the Notifications component

// Create a div with the class 'root-notifications' if it doesn't exist
const notificationsRoot = document.createElement('div');
notificationsRoot.className = 'root-notifications';
document.body.appendChild(notificationsRoot);

// Render the Notifications component inside the 'root-notifications' div
ReactDOM.render(
    <React.StrictMode>
        <Notifications />
    </React.StrictMode>,
    notificationsRoot
);

// Render the App component inside the main root div
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
