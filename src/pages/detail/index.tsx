import * as React from 'react';
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

import navs from './navData'
import {NAVITEM} from '../../interface/globalInterface'

class Detail extends React.Component<any,any>{
  constructor(props: any){
    super(props)
  }
  render(){
    return (
      <div>
        <p className="text">page2 hello</p>
        page2
        <Link to="/">Go to P1</Link>
        {/* <Link to="/page2/self">to Self</Link> */}

        {
          navs.map((i:NAVITEM) => {
            <Route path={`${this.props.match.path}/${i.path}`} component={i.component}/>
          })
        }

      </div>
    )
  }
}

export default Detail;