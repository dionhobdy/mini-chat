import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/welcome/headers.css';

function Hello() {
  return (
    <div>
      <div className='title'>mini-chat</div>
      <div className='select-chat'>SELECT CHAT</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
