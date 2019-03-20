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
    }
    async componentDidMount() {
      if(this.unmount) return;
      try {
        let s = await resolve();
        this.setState({ module: s.default });
      } catch (error) {
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
