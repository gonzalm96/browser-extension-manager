'use client'

import { useState, useEffect } from "react"
import button from "../styleSheets/activeButton.module.scss"

export default function FilterButton({ buttonText, keyVal, isActive, filterList }){

    const [active, setActive] = useState(isActive);

    function activeBtn(){
        filterList(keyVal);
    }

    useEffect(() => {
        if(isActive){
                    console.log(isActive);
            setActive(true);
        }
        else{
                    console.log(isActive);
            setActive(false);
        }
    }, [activeBtn])

    return(
        <button value={keyVal} className={button.filterButton + " " + (active ? button.active:"")}  onClick={activeBtn}>
            {buttonText}
        </button>
    )
}