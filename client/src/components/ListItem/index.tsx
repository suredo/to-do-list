import React, { useContext } from "react";
import { deleteTodo, setStatus } from "../../api/fetchTodo";
import { Store } from "../../store/store";
import { Delete, Item, ItemText } from "./style";

interface IProps {
	key: string,
	_id: string,
	todo: string,
	status: boolean,
}

export const ListItem = ({_id, todo, status} : IProps) => {
	const {dispatchFetch, dispatchTodos} = useContext(Store);

	const handleDelete = () => {
		deleteTodo(_id, dispatchTodos, dispatchFetch);
	}

	const toggleStatus = () => {
		setStatus(_id, dispatchTodos, dispatchFetch);
	}

	return(
		<Item onClick={toggleStatus}><ItemText className={status ? "active" : ""}>{todo}</ItemText><Delete onClick={handleDelete}>x</Delete></Item>
	)
}