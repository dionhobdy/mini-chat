import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/welcome/headers.css';
import 'animate.css';

function Hello() {
  return (
    <div>
      <div className="title">mini-chat</div>
      <input className="address-bar" type="text" placeholder="INPUT ADDRESS"/>
      <label for="browse" className="browse">BROWSE</label>
      <input type="file" id="browse"/>
      <button className="connect" type="button">CONNECT</button>
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
