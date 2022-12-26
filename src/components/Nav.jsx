import React from "react";
import SearchBar from "./SearchBar";

export default function Nav (props) {
    return <div>
        <SearchBar onClick = {props.onSearch}/>
    </div>
}