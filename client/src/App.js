import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react'

import Nav from "./components/Nav/Nav"
import Modal from "./components/Modal/Modal"

//Screens
import ItemsScreen from "./screens/Items/ItemsScreen"
import HistoryScreen from "./screens/History/HistoryScreen"
import HistoryIdScreen from "./screens/HistoryId/HistoryIdScreen"
import StatsScreen from "./screens/Stats/statsScreen"
import NotFound from "./screens/404/404"

import './App.css';

function App() {

  const [cart, setCart] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <Router>
      <div className="app">
        <Nav showCart={() => setCart(!cart)} hideCart={() => setCart(false)} />
        {modal && <Modal click={() => setModal(false)} />}

        <Switch>
          <Route path={"/items"}> <ItemsScreen showModal={() => setModal(true)} cart={cart} hideCart={() => setCart(false)} /> </Route>
          <Route path={"/history"}> <HistoryScreen showModal={() => setModal(true)} /> </Route>
          <Route path={"/list/:id"}> <HistoryIdScreen showModal={() => setModal(true)} /> </Route>
          <Route path={"/stats"}> <StatsScreen showModal={() => setModal(true)} /> </Route>
          <Route path={"/404"}> <NotFound /> </Route>
          <Route path={"/"}> <Redirect from="/" to="/items" /> </Route>
          <Redirect from="*" to="/404" />
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;
