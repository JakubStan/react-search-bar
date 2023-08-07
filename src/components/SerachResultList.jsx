import React from "react";
import "./SerachResultList.css"

import {SearchResult} from "./SearchResult";

export const SerachResultList = ({results}) => {
    return (
        <div className="result-list">        
        {
            results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
            })}
        </div>  
        );  
}; 