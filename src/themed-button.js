import { ThemeContext } from './theme-context';
import React from 'react';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        console.log({ ...props })
        // console.log(props);
        // console.log(theme);
        return (
            <button
                {...props}
                style={{ backgroundColor: theme.background }}
            />
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;