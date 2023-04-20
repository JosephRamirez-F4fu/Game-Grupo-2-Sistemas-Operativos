import {BrowserRouter,Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import StorePage from './pages/StorePage';
import PayPage from './pages/PayPage';
import CarPage from './pages/CarPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/store/*" element={<StorePage />} />

      <Route path="/pay" element={<PayPage />} />
      <Route path="/car" element={<CarPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;