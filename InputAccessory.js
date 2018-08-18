import React, { Component } from 'react';
import { InputAccessoryView, View } from 'react-native';

import withInputAccessory from './withInputAccessory';

@withInputAccessory
export default class InputAccessory extends Component {
  static defaultProps = {
    accessoryStyle: {},
    wrapperStyle: {},
  };

  constructor(props) {
    super(props);
  }
  render() {
    const {
      id,
      accessoryStyle,
      wrapperStyle,
      children,
      functions,
    } = this.props;
    return (
      <InputAccessoryView
        nativeID={id}
        style={[{ width: '100%', height: 40 }, accessoryStyle]}
      >
        <View style={[{ flexDirection: 'row', width: '100%' }, wrapperStyle]}>
          {children(functions)}
        </View>
      </InputAccessoryView>
    );
  }
}
