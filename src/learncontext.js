import React, { Component } from 'react';

const ThemeContext = React.createContext('light');

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class ThemedButton extends Component {
    static contextType = ThemeContext;
    render() {
        return <button theme={this.context} />;
    }
}

class App extends React.Component {

    render() {

        return (
            <ThemeContext.Provider value='dark'>
                <Toolbar />

            </ThemeContext.Provider>
        );
    }
}

export default App;