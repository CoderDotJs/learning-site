import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFoundPage from './Components/404/NotFoundPage';
import Services from './Components/Services/Services';
import LiveSession from './Components/LiveSession/LiveSession';
import LivePreview from './Components/LiveSession/LivePreview/LivePreview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header> {/* header  */}
          <Switch>
            <Route exact path="/">
              <Home></Home> {/* home section  */}
            </Route>
            <Route exact path="/home">
              <Home></Home> {/* home section  */}
            </Route>
            <Route exact path="/about">
              <About></About> {/* about section  */}
            </Route>
            <Route exact path="/services">
              <Services></Services> {/* all services  */}
            </Route>
            <Route exact path="/live">
                <LiveSession></LiveSession> {/* live session components  */}
            </Route>
            <Route exact path="/live/:liveId">
              <LivePreview></LivePreview> {/* live session wathcing page  */}
            </Route>
            <Route exact path="*">
              <NotFoundPage></NotFoundPage> {/* not found page  */}
            </Route>
          </Switch>
          <Footer></Footer> {/* footer  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
