import "./App.css";
import Accueil from "./pages/Accueil";
import Chambres from "./pages/Chambre";
import ChambreSeule from "./pages/ChambreSeule";
import React from "react";
import { Route, Switch } from "react-router-dom";
import PageErreur from "./pages/PageErreur";
import Navbar from './component/Navbar'
import PageConnexion from "./pages/PageConnexion";

function App() {
  return (
    <>
       <Navbar />
      <Switch>     
        <Route exact path="/" component={Accueil} />
        <Route exact path="/rooms" component={Chambres} />
        <Route exact path="/pageConnexion" component={PageConnexion} />
        <Route exact path="/rooms/:slug" component={ChambreSeule} />
        <Route component={PageErreur} />
        {/* <Route component={PageConnexion} /> */}
      </Switch>
    </>
  );
}

export default App;
