import { useContext } from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import CustomFooter from './components/CustomFooter/CustomFooter';
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import { UserContext } from "./contexts/UserContext.jsx";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <header>
        {user && <CustomNavbar/>}
        {user && <div className="custom__navbar__spacer"></div>}
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