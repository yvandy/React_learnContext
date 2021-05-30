import React from 'react';


export const themes = {
    light: {
        foreground: 'green',
        background: 'red',
    },
    dark: {
        foreground: 'white',
        background: 'blue',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);