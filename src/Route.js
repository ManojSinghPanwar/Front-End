import React from 'react'
import {BrowerRouter, Switch, Route} from 'react-router-dom'
import SignUp from './SignUp'
import Signin from './SignIn.js'

function Routes() {
    return (
        <div>
            
                <Route path='/signin' >
                    <SignUp/>
                </Route>
            
        </div>
    );
}

export default Routes;