import React, { useState } from 'react'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { RegistrationPage1, RegistrationPage2} from '../registrationPages';



const App = () => {

    const [ name, setName ] = useState('');
    const [ card, setCard ] = useState('');

    const clear = () => {
        setName('');
        setCard('');
        window.location.href='/registration/1';
        window.location.reload();
    }


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/registration/1" render={(props) => (
                <div>
                    <RegistrationPage1
                        clear={clear}
                        setName={setName} 
                        name={name}
                        />
                </div>)} />

                <Route path="/registration/2" render={(props) => (
                <div>
                    <RegistrationPage2 
                        clear={clear}
                        name={name} 
                        card={card} 
                        setCard={setCard} 
                        setName={setName} />
                </div>)} />
                
                <Redirect exact from="/blk-design-system-react" to="/registration/1" />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
