import './app.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Locations } from './pages/Location/Locations';
import { Shop } from './pages/Shop/Shop';
import { NavigationBar } from './NavigationBar/NavigationBar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
