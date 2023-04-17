import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      
    
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/profile/edit" element={<ProfileEditPage/>}/>
      <Route path="/store/*" element={<StorePage/>}/>
      

      <Route path="/pay" element={<PayPage/>}/>
      <Route path="/car" element={<CarPage/>}/>

      <Route path="/inventory" element={<WorkerPage/>}/>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;