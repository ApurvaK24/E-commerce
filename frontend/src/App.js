import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <>
    <Header />
    <div className="m-5 py-3 ">
      <HomeScreen />
    </div>
    <Footer />
    </>
  );
}

export default App;
