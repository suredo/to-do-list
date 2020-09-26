import React, { useContext } from "react";

import { Store } from "../../store/store";
import { Wrapper } from "./style";

import { ListItem } from "../ListItem";
import { Loading } from "../loading";

interface IProps {
	filter: string
}

export const List = ({filter} : IProps) => {
	const { todos, fetch } = useContext(Store);
	let filtered = todos;
	if(filter === "done"){
		filtered = todos.filter( todo => todo.status);
	}else if(filter === "notDone"){
		filtered = todos.filter( todo => !todo.status);
	}
	const list = fetch.loading ? <Loading /> : filtered.map(todo => <ListItem key={todo._id} todo={todo.todo} _id={todo._id} status={todo.status}/>);
	return(
		<Wrapper>
			{list}
		</Wrapper>
	)
}