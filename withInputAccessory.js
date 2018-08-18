import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

import InputAccessoryContext from './InputAccessoryContext';

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
