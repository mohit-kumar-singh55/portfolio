import './App.css';
import Navbar from './components/Navbar/Navbar';
import Transtition from './components/Transition/Transition';

function App() {
  return (
    <div className="body">
      <Transtition />
      <Navbar />
    </div>
  );
}

export default App;