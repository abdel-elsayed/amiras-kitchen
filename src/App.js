import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import NavBar from './components/navbar/navbar.js'
import Footer from './components/footer/Footer.js'
import About from './pages/about/About'
import Home from "./pages/home/Home";




function App() {
  
  return (
    <div className="App" style={{ position: "relative"}}>
    <NavBar />
    
    <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fade"
            >
      <Switch>
        <div className="content-wrapper">
        <Route exact path="/Home" className="Home" component={Home} />
        <Route exact path="/About" className="About" component={About} />
        {/* <Route path="/Projects" component={Projects} />  */}
       
        <Route exact path="/">
    <Redirect to="/home" />
</Route>
        </div>

      </Switch>
      </CSSTransition>
          </TransitionGroup>
        )} />
    <Footer />
    </div>
  );
}
export default App;
