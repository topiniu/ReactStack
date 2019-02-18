import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Routers from './navData'
import  {NAVITEM} from './interface/globalInterface'

class MyRouter extends React.Component<any,any>{
  render(){
    return (
        <BrowserRouter>
          <Switch>
            {
              Routers.map((n:NAVITEM) => {
                return <Route path={n.path} exact={n.exact} component={n.component} key={name}/>
              })
            }
          </Switch>
        </BrowserRouter>
    )
  }
}

export default MyRouter;