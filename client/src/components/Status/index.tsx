import React, { useContext } from "react";
import { FilterItem, FilterList } from "./style";

interface IProps {
	setFilter: Function
}

export const Status = ({setFilter}: IProps) => {
	return(
		<FilterList>
			<FilterItem onClick={() => setFilter("done")}>Feito</FilterItem>
			<FilterItem onClick={() => setFilter("notDone")}>A fazer</FilterItem>
			<FilterItem onClick={() => setFilter("all")}>Todos</FilterItem>
		</FilterList>
	)
}