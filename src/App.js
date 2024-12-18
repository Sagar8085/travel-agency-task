
import './App.css';
import Navigationbar from './Components/Navbar/Navigationbar';
import Footer from './Components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <div>
  <Navigationbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
