import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" exact render={(props)=> <Home/>}/>
      </Router>
    </div>
  );
}

export default App;
