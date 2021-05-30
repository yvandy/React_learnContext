import React from 'react';
import FancyButton from './component/FancyButton';

const App1 = () => {
    const ref = React.createRef();

    return (
        <>

            <FancyButton ref={ref}>
                Hi everyone
            </FancyButton>
            <FancyButton ref={ref}>
                hello everyone
            </FancyButton>
        </>
    )
}
export default App1;

// Here is a step - by - step explanation of what happens in the above example:

// We create a React ref by calling React.createRef and assign it to a ref variable.
// We pass our ref down to < FancyButton ref = { ref } > by specifying it as a JSX attribute.
// React passes the ref to the(props, ref) => ... function inside forwardRef as a second argument.
// We forward this ref argument down to < button ref = { ref } > by specifying it as a JSX attribute.
// When the ref is attached, ref.current will point to the < button > DOM node.