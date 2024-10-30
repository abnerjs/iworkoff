import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FirstPage from './view/FirstPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FirstPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
