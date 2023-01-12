import './App.css';
import About from "./components/About"
import Faculty from "./components/Faculty"
/*import Gallary from "./components/Gallary"*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallary from './components/Gallary';

function App() {
  return (
    <div className="App">
      <About/>
      <Faculty/>
      <Gallary/>
    </div>
  );
}

export default App;
