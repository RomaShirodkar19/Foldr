import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Upload from './pages/Upload';
import Transactions from './pages/Transactions';
import Subscription from './pages/Subscription';
import Dashboard from './pages/Dashboard';
import MyFiles from './pages/MyFiles';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;