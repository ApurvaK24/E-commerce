import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <Header />
    <div className="m-5 py-3 ">
      <Outlet />
    </div>
    <Footer />
    </>
  );
}

export default App;
