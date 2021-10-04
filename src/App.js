import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Account from './components/Account/Account';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* universal hadder */}
        <Header></Header>
        {/* route  */}
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/Home'>
            <Home></Home>
          </Route>
          <Route exact path='/Services'>
            <Services></Services>
          </Route>
          <Route exact path='/About-Us'>
            <About></About>
          </Route>
          <Route exact path='/Profile'>
            <Account></Account>
          </Route>
          <Route exact path='/Contact'>
            <Contact></Contact>
          </Route>

          {/* 404 page */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* universal footer */}
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
