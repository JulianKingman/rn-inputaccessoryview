import React, { Component } from 'react';
import hoistStatics from 'hoist-non-react-statics';

const InputAccessoryContext = React.createContext({
  setAccessoryFunction: null,
});

class InputAccessoryProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.setAccessoryFunction = this.setAccessoryFunction.bind(this);
  }

  setAccessoryFunction(key, fn) {
    this.setState({ [key]: fn });
  }

  render() {
    const { children } = this.props;
    return (
      <InputAccessoryContext.Provider
        value={{
          setAccessoryFunction: this.setAccessoryFunction,
          ...this.state,
        }}
      >
        {children}
      </InputAccessoryContext.Provider>
    );
  }
}

const withInputAccessory = WrappedComponent =>
  hoistStatics(
    props => (
      <InputAccessoryContext.Consumer>
        {inputAccessoryProps => (
          <WrappedComponent {...inputAccessoryProps} {...props} />
        )}
      </InputAccessoryContext.Consumer>
    ),
    WrappedComponent
  );

export default withInputAccessory;
export { InputAccessoryProvider };
