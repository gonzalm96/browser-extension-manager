'use client'

import { useState, useEffect } from "react";

import styles from "./page.module.css";

import containers from "./styleSheets/containers.module.scss" 

import SearchBar from "./components/searchBar";
import ExtensionBox from "./components/extensionBox";
import FilterButton from "./components/filterButton";

import localData from '../assets/data.json';

export default function Home() {

  const [filterAll, setAll] = useState(true);
  const [filterActive, setActive] = useState(false);
  const [filterInactive, setInactive] = useState(false);

  const [extensionData, setData] = useState(localData);

  const [extList, setList] = useState(extensionData);

  const [currentFilter, setFilter] = useState(1);

  function filterList(filter){
    console.log(extensionData);
    if(filter == 1){
      setList(extensionData);      
    }
    else if(filter == 2){
      setList(extensionData.filter((item) => item.isActive == true));
    }
    else if(filter == 3){
      setList(extensionData.filter((item) => item.isActive != true));         
    }

    setFilter(filter);
  }

  function removeExtension(key){
    console.log("removing "+key);
    let tempList = extList.filter((item) => item.name != key);
    let tempData = extensionData.filter((item) => item.name != key);
    setData(tempList);
    setList(tempList);
  }

  function updateStatus(id){
    let listCopy = extList;
    listCopy[listCopy.findIndex((ext) => ext.name == id)].isActive = !listCopy[listCopy.findIndex((ext) => ext.name == id)].isActive;
    setList(listCopy);
  }

  useEffect(() => {
    if(currentFilter == 1){
      setAll(true);
      setActive(false);  
      setInactive(false);     
    }
    else if(currentFilter == 2){
      setAll(false);
      setActive(true);  
      setInactive(false);         
    }
    else if(currentFilter == 3){
      setAll(false);
      setActive(false);  
      setInactive(true);                  
    }
  }, [extList])

  return (
    <div className={containers.section}>
      <SearchBar></SearchBar>

      <div>
        <div className={containers.filterSection}>
          <h2>Extensions List</h2>
          <div className={containers.filterButtons}>
            <FilterButton buttonText="All" keyVal="1" isActive={filterAll} filterList={filterList}></FilterButton>
            <FilterButton buttonText="Active" keyVal="2"  isActive={filterActive} filterList={filterList}></FilterButton>
            <FilterButton buttonText="Inactive" keyVal="3" isActive={filterInactive} filterList={filterList}></FilterButton>
          </div>
        </div>
        <div className={containers.extensionsContainer}>
          {extList.map((data) => (
            <ExtensionBox key={data.name} logo={data.logo} name={data.name} description={data.description} isActive={data.isActive} updateStatus={updateStatus} removeExtension={removeExtension}></ExtensionBox>
          ))} 
        </div>
      </div>
    </div>
  );
}