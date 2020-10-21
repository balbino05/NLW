import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import landing from './pages/landing';
import OphanagesMap from './pages/OphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={landing} />
            <Route path="/app" component={OphanagesMap} />
            
            <Route path="/orphanages/create" exact component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
        </BrowserRouter>
        
    );
}

export default Routes;
