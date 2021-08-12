import React, {useContext} from 'react';
import  {IThemeContextType} from "../content/ThemeContext";
import ThemeContext from '../content/ThemeContext';

function ThemeToggle() {
    const {theme, setTheme} = useContext<IThemeContextType>(ThemeContext)

    return (
        <button className={!theme ? 'theme-toggle dark' : 'theme-toggle'}
                onClick={() => {
                    setTheme(!theme)
                }}>
            {theme ? "Dark" : "Light"}
        </button>
    );
}

export default ThemeToggle;