import * as React from 'react'; 
import {Link} from 'react-router-dom'

class Main extends React.Component<any,any>{
  constructor(props:any){
    console.log(props)
    super(props)
  }
  render(){
    console.log(this.props)
    return (
      <div>
        page1
        <Link to="/page2">啊啊啊</Link>
        <Link to="/page3">ppp</Link>
      </div>
    )
  }
}

export default Main;