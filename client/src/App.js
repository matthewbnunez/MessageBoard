import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import DetailUser from './views/DetailUser';


function App() {

    return (
        <div className="container mt-1">
            <Routes>
                <Route element={<Main />} path="/" />
                <Route element={<DetailUser />} path="/users/:id" />
            </Routes>
        </div>
    );
}
export default App;