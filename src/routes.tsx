import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import landing from './pages/landing';
import OphanagesMap from './pages/OphanagesMap';

function Routes() {
    return(
        <switch>
            <BrowserRouter>
            <Route path="/" exact component={landing} />
            <Route path="/app" component={OphanagesMap} />
            </BrowserRouter>
        </switch>
        
    );
}

export default Routes;
