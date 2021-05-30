import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (

    <button ref={ref} >
        {props.children}
    </button>
))

const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
//     return(
//         <button>
//             {props.children}
//         </button>
//     )
// }

export default FancyButton;