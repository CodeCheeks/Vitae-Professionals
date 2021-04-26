import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import CustomFooter from './components/CustomFooter/CustomFooter';
import CustomNavbar from './components/CustomNavbar/CustomNavbar'

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar></CustomNavbar>
        <div className="custom__navbar__spacer"></div>
      </header>

      <main>
        <AppRouter/>
      </main>

      <footer className="footer">
        <CustomFooter/>
      </footer>
    </div>
  );
}

export default App;
