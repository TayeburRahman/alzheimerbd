
import { Route, Routes } from 'react-router';
import './App.css';
import './assets/css/main.css';
import './assets/css/shared.css';
import Home from './components/pages/Home';
import Footer from './components/shared/Footer';
import Header from './components/shared/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
