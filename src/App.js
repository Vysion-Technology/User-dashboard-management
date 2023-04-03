
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './components/Account/Login';
import Formed from './components/Formed';
import Verification from './components/Verification';
import Add from './components/Industries/myteam/Add';
import IndustryPage from './components/Industries/industries';
import FrontPage from './components/FrontPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<FrontPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/formed" element={<Formed/>} />
      <Route path="/verification" element={<Verification/>} />
      <Route path="/industry" element={<IndustryPage/>} />
      <Route path="/add" element={<Add/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
