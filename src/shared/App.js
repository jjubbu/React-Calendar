import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";

import FullCalendarApp from "../pages/FullCalendarApp";
import AddSchedule from "../pages/AddSchedule"


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
     
      <Route path="/" exact component={FullCalendarApp}/>
      <Route path="/add" exact  component={AddSchedule}/>
      
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
