import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { todoReducer, GET_ALL_TODOS} from "../reducers/reducers";
import { fetchReducer } from "../reducers/fetchReducers";
import { IContext, IFetch, IProps, ITodos } from "../types/types";
import { fetchTodos } from "../api/fetchTodo";

const initial: Array<ITodos> = [];
const fetchInitial: IFetch = {loading: false, error: false};

export const Store = createContext<IContext>({} as IContext);

export const ContextProvider = ({children} : IProps) => {
	const [todos, dispatchTodos] = useReducer(todoReducer, initial);
	const [fetch, dispatchFetch] = useReducer(fetchReducer, fetchInitial);

	useEffect(() => {
		fetchTodos(dispatchTodos, dispatchFetch);
	}, []);
	return(
		<Store.Provider value={{todos, fetch , dispatchFetch, dispatchTodos}}>
			{children}
		</Store.Provider>
	)
}