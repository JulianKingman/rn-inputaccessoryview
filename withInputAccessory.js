import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

import InputAccessoryContext from './InputAccessoryContext';

const withInputAccessory = WrappedComponent =>
  hoistStatics(
    <InputAccessoryContext.Consumer>
      {inputAccessoryProps => (
        <WrappedComponent {...inputAccessoryProps} {...props} ref={ref} />
      )}
    </InputAccessoryContext.Consumer>,
    WrappedComponent
  );

export default withInputAccessory;
