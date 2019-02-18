import * as React from 'react';

interface HelloProps {
  compiler: string,
  framework: string
}

class Hello extends React.Component<HelloProps, any> {
  constructor(props: HelloProps){
    super(props);
    console.log('lala')
  }
  render(){
    return <h1>sss</h1>
  }
}
export default Hello;