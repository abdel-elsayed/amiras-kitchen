import './App.css';
import MyCarousal from './components/myCarousal/myCarousal.js'
import NavBar from './components/navbar/navbar.js'
import MainSection from './components/main-section/MainSection.js'

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
    <NavBar />
    <MyCarousal />
    <MainSection />

    </div>
  );
}
export default App;
