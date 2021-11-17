import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Nav from "./components/Nav/Nav"
import Modal from "./components/Modal/Modal"
import ShoppingList from './components/Cart/ShopingList';

//Screens
import ItemsScreen from "./screens/Items/ItemsScreen"
import HistoryScreen from "./screens/History/HistoryScreen"
import HistoryIdScreen from "./screens/HistoryId/HistoryIdScreen"
import StatsScreen from "./screens/Stats/statsScreen"
import NotFound from "./screens/404/404"

import './App.css';

function App() {

  const [modal, setModal] = useState(false);
  const [side, setSide] = useState(false);
  const [display, setDisplay] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 950) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    handleResize();
  }, []);


  return (
    <Router>
      <div className="app">
        <Nav showCart={() => setSide(!side)} hideDisplay={() => setDisplay(false)} />
        {modal && <Modal click={() => setModal(false)} />}

        <div className="body">
          <Switch>
            <Route path={"/items"}> <ItemsScreen showModal={() => setModal(true)} mobile={mobile} display={display} hideDisplay={() => mobile ? setDisplay(false) : null} showDisplay={() => mobile ? setDisplay(true) : null} /> </Route>
            <Route path={"/history"}> <HistoryScreen showModal={() => setModal(true)} /> </Route>
            <Route path={"/list/:id"}> <HistoryIdScreen showModal={() => setModal(true)} /> </Route>
            <Route path={"/stats"}> <StatsScreen showModal={() => setModal(true)} /> </Route>
            <Route path={"/404"}> <NotFound /> </Route>
            <Route path={"/"}> <Redirect from="/" to="/items" /> </Route>
            <Redirect from="*" to="/404" />
          </Switch>

          <div className={`side-cart ${mobile && side ? "side" : ""}`}>
            <div>
              <ShoppingList showModal={() => setModal(true)} mobile={mobile} hideDisplay={() => setDisplay(false)} showDisplay={() => setDisplay(true)} hideCart={() => setSide(false)} /> 
            </div>  
          </div>
          
        </div>
        
      </div>
    </Router>
  )
}

export default App;
