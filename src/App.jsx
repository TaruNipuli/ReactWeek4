import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './components/Layout';
import Home from './views/Home';
import Upload from './views/Upload';
import Profile from './views/Profile';
import Single from './views/Single';


const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/single" element={<Single />} />
        <Route path="/" element={<Home />} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
};
export default App;