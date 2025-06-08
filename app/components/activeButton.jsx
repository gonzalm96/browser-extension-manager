'use client'

import { useState, useEffect } from 'react';

import btn from '../styleSheets/activeButton.module.scss';

export default function ActiveButton({ isActive, updateStatus, keyVal }){

    const [active, setActive] = useState(isActive);

    function onClick(){
        if(active){
            setActive(false);
            updateStatus(keyVal, false);
        } 
        else { 
            setActive(true);
            updateStatus(keyVal, true);
        }
    }

    return(
        <button className={btn.slideBtn + " " + (active ? btn.active:btn.inactive)} onClick={onClick}>
            <div className={btn.clickSlider}></div>
            <div className={btn.sliderBg + " " + (active ? btn.active:btn.inactive)}></div>
        </button>
    )
}