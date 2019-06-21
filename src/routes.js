import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Principal from './pages/Principal'
import Sobre from './pages/Sobre'
import Learn_Basico from './pages/pages_learn/Basico'
import Disciplina from './pages/pages_learn/Disciplina'

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Principal}/>
            <Route path="/Sobre" component={Sobre}/>
            <Route path="/Learn_Basico" component={Learn_Basico}/>
            <Route path="Disciplina01" component={Disciplina}/>
        </Switch>
    );
}

export default Routes;