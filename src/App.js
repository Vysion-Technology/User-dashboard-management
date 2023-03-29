
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './components/Account/Login';
import Formed from './components/Formed';
import Verification from './components/Verification';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/formed" element={<Formed/>} />
      <Route path="/verification" element={<Verification/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
