import { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import CustomFooter from './components/CustomFooter/CustomFooter';
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import LateralBar from './components/Views/LateralBar/LateralBar';
import { UserContext } from "./contexts/UserContext.jsx";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <header>
        {user ?
          (
            <>
              <CustomNavbar {...user}/>
              <div className="custom__navbar__spacer"></div>
            </>
          )
          :
          (
          <Navbar className="color__nav" variant="dark">
              <Navbar.Brand>
                <img src="https://pics.freeicons.io/uploads/icons/png/18081978721600459989-512.png" width="30" height="30" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
              </Navbar.Brand>
            </Navbar>
          )
        }
      </header>

      <main>
        <div className='container-fluid'>
        
          <div className='row'>
            <div className={`${user ? 'col-sm-12 col-md-12  col-lg-2' : 'd-none'}`}>
              {user && <LateralBar/> }
            </div>

            <div className={`${user ? 'col-sm-12 col-md-12  col-lg-10' : 'col-12'}`}>
              <AppRouter/>
            </div>

          </div>
        
        </div>
      

      </main>

      <footer className="footer">
        <CustomFooter/>
      </footer>
    </div>
  );
}

export default App;