import * as React from 'react'; 
import {Link} from 'react-router-dom'
import './style.scss'

import Self from '../detail'

class Main extends React.Component<any,any>{
  constructor(props:any){
    super(props)
  }
  render(){
    return (
      <div>
        <Self {...this.props}></Self>

      
      <div className="p1-c">
        <p className="text">test text</p>
        page1<br/>
        <Link to="/page2">Go to P2</Link><br/>
        <Link to="/page3">Go to P3</Link>
      </div>
      </div>
    )
  }
}

export default Main;