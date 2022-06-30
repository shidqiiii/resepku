import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import './CSS/App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
