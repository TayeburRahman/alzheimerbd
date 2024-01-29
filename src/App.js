
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/shared/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
