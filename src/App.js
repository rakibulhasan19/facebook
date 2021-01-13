import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import './App.css'
const App =()=>(
    <div className="app">
            <Header/>
        <div className="app_body">
            <Sidebar/>
            <Feed/>
        </div>
        {/*widgets*/}

    </div>
);
export default App;