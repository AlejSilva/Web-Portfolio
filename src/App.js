import './App.css';
import { MyNavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
