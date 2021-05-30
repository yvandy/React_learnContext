import React, { createContext } from 'react';
import CompA from './component/CompA';


const fname = createContext();

const Mainfile = () => {

    return (
        <React.Fragment>
            <fname.Provider value={"vandana"}>
                <CompA>

                </CompA>
            </fname.Provider>
        </React.Fragment>

    )

}

export default Mainfile;
export { fname };