import React from 'react';
import FancyButton from './FancyButton';

function LogProps(Component) {
  class Log extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to Log as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <Log {...props} forwardedRef={ref} />;
  });
}

// class FancyButton extends React.Component {
//   focus() {
//     // ...
//   }

//   // ...
// }

export default LogProps(FancyButton);