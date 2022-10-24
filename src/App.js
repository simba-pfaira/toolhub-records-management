import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Leaderboard from './Leaderboard';
import NavigationBar from './NavigationBar';
import RecordsDashboard from './RecordsDashboard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='records-dashboard' element={<RecordsDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
