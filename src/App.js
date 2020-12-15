import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Create  from './component/Create';
import  Dashboard  from './component/Dashboard';
import  Update from './component/Update';
import Menu from './helper/Menu';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
        <Switch>
            <Route exact path="/" component= {Dashboard}/>
            <Route exact path="/dash" component= {Dashboard} />
            <Route exact path="/create" component= {Create} />
            <Route exact path="/update/:id" component= {Update} />
        </Switch>
    </BrowserRouter> 
  );
}

export default App;
 