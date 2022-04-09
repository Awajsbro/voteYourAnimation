import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import NavBar from './component/navBar';
import NotFound from './pages/notFound';
import Calendar from './pages/calendar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
