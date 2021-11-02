import React from "react";

import { Home } from './pages/Home';
import { Musica } from './pages/Musica';
import { Cidade } from './pages/Cidade';
import { Switch, Route } from 'react-router-dom';

export const Rotas = ()=> {

    return(
        <main>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/Musica' component={Musica} />
            <Route  path='/Cidade' component={Cidade} />
            </Switch>
        </main>
    );
}