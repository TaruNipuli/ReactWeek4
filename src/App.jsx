import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router';
import { UserProvider } from './contexts/UserContext';

import Home from './views/Home';
import Layout from './components/Layout';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Single from './views/Single';
import Upload from './views/Upload';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;