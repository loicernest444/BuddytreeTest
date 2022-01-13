import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostPage from './components/Post/Post';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <PostPage></PostPage>
    </div>
  );
}

export default App;
