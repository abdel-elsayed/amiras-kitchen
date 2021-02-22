import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { EasybaseProvider } from "easybase-react"
import {createStore} from'redux'
import { Provider } from "react-redux";
import reducer from './redux/reducer'


import ebconfig from './ebconfig'
import NavBar from './components/navbar/navbar.js'
import Footer from './components/footer/Footer.js'
import About from './pages/about/About'
import Home from "./pages/home/Home";
import Recipes from './pages/recipes/recipes'
import Card from './pages/card/card'
import { BrowserRouter} from "react-router-dom";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
  const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };
  
const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

  return (
    <div className="App" style={{ position: "relative"}}>
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          <BrowserRouter>
            <NavBar />
            <Route render={({location}) => (
              <EasybaseProvider ebconfig={ebconfig}>
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
                            <Route exact path="/Recipes" className="Recipes" component={Recipes} />
                            <Route exact path="/Card/:name" className="Card" component={Card} />
                          
                            <Route exact path="/">
                              <Redirect to="/home" />
                            </Route>
                          </div>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </EasybaseProvider>
              )} />
            </BrowserRouter>
          </PersistGate>
        </Provider>
        
      <Footer />
    </div>
  );
}
export default App;