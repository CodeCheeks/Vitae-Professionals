import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import CustomFooter from './components/Views/CustomFooter/CustomFooter';

function App() {
  return (
    <div className="App">
      <header></header>

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
