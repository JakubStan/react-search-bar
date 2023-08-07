import React from "react";

import "./SerachResult.css"

export const SearchResult = ({ result }) => {
  return <div className="serach-result"  onClick={(e) => alert(`You click on ${result.name}`)}> 
    {result.name}
    </div>;
};



