import React from 'react';
import './App.css'; // Asegúrate de tener este archivo CSS para los estilos

function App() {
    return (
        <div>
            {/* Header Section */}
            <header className="App-header">
                <img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240907%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240907T134826Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6225ce92949e2ecccda71d84de4060bbf2046d8bf650ad47e02362e0312b016d" alt=""/>
                <h1>School dashboard</h1>
            </header>

            {/* Body Section */}
            <div className="App-body">
                <p>Login to access the full dashboard</p>
            </div>

            {/* Footer Section */}
            <footer className="App-footer">
                <p>Copyright 2024 - Holberton School</p>
            </footer>
        </div>
    );
}

export default App;
