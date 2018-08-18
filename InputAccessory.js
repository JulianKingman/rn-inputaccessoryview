import React, { Component } from 'react';
import { InputAccessoryView, View } from 'react-native';

import withInputAccessory from './withInputAccessory';

@withInputAccessory
export default class InputAccessory extends Component {
  static defaultProps = {
    style: {
      backgroundColor: 'grey',
    },
  };

  constructor(props) {
    super(props);
  }
  render() {
    const { id, style, children, functions } = this.props;
    return (
      <InputAccessoryView
        nativeID={id}
        style={[{ width: '100%', height: 40 }, style]}
        backgroundColor={style.backgroundColor}
      >
        {children(functions)}
      </InputAccessoryView>
    );
  }
}
