import React, { Component } from 'react';
import InputAccessoryContext from './InputAccessoryContext';

export default class InputAccessoryProvider extends Component {
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
