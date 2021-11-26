import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile"

import hogs from "../porkers_data";

function App() {

	const [pigs, setPigs] = useState(hogs)
	const [filterBy, setFilterBy] = useState("All");
	const [sortBy, setSort] = useState(true)

	function handleFilterChange(event){
		setFilterBy(event.target.value);
	}

	function handleSortChange(){
		setSort(!sortBy);
	}

	const pigsToDisplay = pigs.sort(function(a,b){
		if (sortBy === true){
			if (a.name < b.name){return -1;}
			if (a.name > b.name){return 1;}
			return 0;
		} else if (sortBy === false) {
			return a.weight - b.weight
		}
	}).filter((pig) => {
		if (filterBy === "All") {
			return true;
		} else {
			return pig.greased.toString() === filterBy;
		}
	})

	const pigTiles = pigsToDisplay.map((pig) => {
		return <Tile key={hogs.indexOf(pig)} pigObj={pig}   />
	})

	return (
		<div className="App">
			<Nav />
			<p>Filter by:</p>
			<select name="filter" onChange={handleFilterChange}>
				<option value="All">All</option>
				<option value="true">Greased</option>
				<option value="false">Not greased</option>
			</select>
			<button onClick={handleSortChange}>Sort by {sortBy ? "Weight" : "Name"}</button>
			{pigTiles}
		</div>
	);
}

export default App;
