'use client'

import Image from "next/image";

import ActiveButton from "./activeButton";

import boxStyle from "../styleSheets/extensionBox.module.scss";

export default function ExtensionBox({logo, name, description, isActive, updateStatus, removeExtension}){
    const extensionImg = logo;

    return(
        <div className={boxStyle.boxContainer}>
            <div className={boxStyle.infoSection}>
                <Image src={logo} width={40} height={40} alt={name + " logo"}></Image>
                <div className={boxStyle.description}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className={boxStyle.buttonsSection}>
                <button className={boxStyle.removeBtn} onClick={() => removeExtension(name)}>Remove</button>
                <ActiveButton keyVal={name} isActive={isActive} updateStatus={updateStatus}></ActiveButton>
            </div>
        </div>
    )
}