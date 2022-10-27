import { Routes, Route, Link } from 'react-router-dom'
import './App.sass'
import Header from "./components/Header/Header"
import Feed from "./components/Feed/Feed"

function App() {
  return (
    <div className="App mx-auto">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
