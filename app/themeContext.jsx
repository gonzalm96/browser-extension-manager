     // ThemeContext.js
     "use client";

     import container from "./styleSheets/containers.module.scss";

     import React, { createContext, useState, useEffect } from 'react';

     export const ThemeContext = createContext();

     export const ThemeProvider = ({ children }) => {
       const [theme, setTheme] = useState(container.dark);

        useEffect(() => {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                setTheme(storedTheme);
            }
        }, []);

       useEffect(() => {
         localStorage.setItem('theme', theme);
         if(theme === container.light){
          document.body.className = container.page + " " + container.light;
         }
         else{
          document.body.className = container.page + " " + container.dark;
         }
       }, [theme]);

       const toggleTheme = () => {
         console.log(theme);
         setTheme(theme === container.light ? container.dark : container.light);
       };

       return (
         <ThemeContext.Provider value={{ theme, toggleTheme }}>
           {children}
         </ThemeContext.Provider>
       );
     };