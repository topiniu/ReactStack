import * as React from "react";

interface State {
  module: any;
}

export const Q = (resolve: any) => {
  return class LazyLoadModule extends React.Component<any, State> {
    private unmount = false;
    constructor(props: any) {
      super(props);
      this.unmount = false;
    }
    state: State = {
      module: null
    };
    componentWillUnmount(){
      this.unmount = true;
    }
    componentDidCatch(error: any) {
      console.log("something wrong");
    }
    async componentDidMount() {
      if(this.unmount) return;
      try {
        let s = await resolve();
        console.log(s);
        this.setState({ module: s.default });
      } catch (error) {
        console.log("something going wrong");
        console.log(error);
      }
    }
    render() {
      const { module } = this.state;
      if (!module) return <div>Loading module...</div>;
      if (typeof module === "function") return React.createElement(module,{...this.props});
      return <h1>Module loaded</h1>;
    }
  };
};
