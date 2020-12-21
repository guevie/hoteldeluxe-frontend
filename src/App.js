import "./App.css";
import Accueil from "./pages/Accueil";
import Chambre from "./pages/Chambre";
import ChambreSeule from "./pages/ChambreSeule";
//import PageErreur from './pages/PageErreur'
import React from "react";
import { Route, Switch } from "react-router-dom";
import PageErreur from "./pages/PageErreur";
import Navbar from './component/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/rooms" component={Chambre} />
        <Route exact path="/rooms/:slug" component={ChambreSeule} />
        <route component={PageErreur} />
      </Switch>
    </>
  );
}

export default App;
