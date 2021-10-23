import { createContext } from 'react';

export const themes = {
    dark: {
        background: '#404040',
        textColor: '#ffffff',
    },
    light: {
        background: '#ffffff',
        textColor: '#404040',
    },
};

export const ThemeContext = createContext(themes.light);
