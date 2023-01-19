import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";

export default function Nav ({onSearch}) {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <SearchBar onSearch = {onSearch}/>
    </div>
}