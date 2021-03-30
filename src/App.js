import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { Suspense, lazy } from "react";
import NavBar from "./components/navbar/navbar.js";
import Footer from "./components/footer/Footer.js";
import { BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Recipes = lazy(() => import("./pages/recipes/recipes"));
const Card = lazy(() => import("./pages/card/card"));

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />

          <Route
            render={({ location }) => (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  in={true}
                  timeout={500}
                  classNames="fade"
                >
                  <Switch>
                    <Route
                      exact
                      path="/Home"
                      className="Home"
                      component={Home}
                    />
                    <Route
                      exact
                      path="/About"
                      className="About"
                      component={About}
                    />
                    <Route
                      exact
                      path="/Recipes"
                      className="Recipes"
                      component={Recipes}
                    />
                    <Route
                      exact
                      path="/Card/:id"
                      className="Card"
                      component={Card}
                    />

                    <Route exact path="/">
                      <Redirect to="/Home" />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          ></Route>
        </Suspense>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
