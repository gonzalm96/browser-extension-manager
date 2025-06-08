'use client'

import heading from '../styleSheets/headingSection.module.scss';
import container from '../styleSheets/containers.module.scss';

import { useState, useContext } from 'react';

import { ThemeContext } from '../themeContext';

import Image from "next/image";

export default function SearchBar(){

    // const { theme, toggleTheme } = useContext(ThemeContext);

    const [theme, setTheme] = useState(false);

    return( 
        <div className={container.inputSection + " " + heading.content}>
            <Image src={theme ? "/images/logo.svg":"/images/darkLogo.png"} width={135} height={30} alt="Extensions Manager"></Image>
            <button className={heading.themeBtn} onClick={() => theme ? setTheme(true):setTheme(false)}>
                <Image src={ theme ? "/images/icon-moon.svg":"/images/icon-sun.svg" } width={16} height={16} alt={theme ? "Change theme to dark mode":"Change theme to light mode."}></Image>
            </button>
        </div>
    )
}