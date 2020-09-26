import { DONE_FETCHING, FETCHING } from "../reducers/fetchReducers";
import { ADD_TODO, DELETE_TODO, GET_ALL_TODOS, SET_STATUS } from "../reducers/reducers";

export const fetchTodos = async (dispatchTodos: Function, dispatchFetch: Function) => {
	dispatchFetch(FETCHING);
	await fetch("/api")
		.then(res => res.json())
		.then(res => {
			dispatchTodos({type: GET_ALL_TODOS, payload: res});
			dispatchFetch(DONE_FETCHING);
		});
}

export const addTodo = async (payload: any, dispatchTodos: Function, dispatchFetch: Function) => {
	dispatchFetch(FETCHING);
	await fetch("/api/addtodo", {
		method: "POST",
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
		body: JSON.stringify({todo: payload})
	})
		.then(res => res.json())
		.then(res => {
			dispatchTodos({type: ADD_TODO, payload: res});
			dispatchFetch(DONE_FETCHING);
		});
}

export const deleteTodo = async (id: string, dispatchTodos: Function, dispatchFetch: Function) => {
	dispatchFetch(FETCHING);
	console.log(id);
	await fetch("/api/deletetodo", {
		method: "DELETE",
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
		body: JSON.stringify({id: id.toString()})
	})
		.then(res => res.json())
		.then(res => {
			console.log(res);
			dispatchTodos({type: DELETE_TODO, payload: id});
			dispatchFetch(DONE_FETCHING);
		});
}

export const setStatus = async (id: string, dispatchTodos: Function, dispatchFetch: Function) => {
	dispatchFetch(FETCHING);
	await fetch("/api/setstatus", {
		method: "PUT",
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
		body: JSON.stringify({id: id})
	})
		.then(res => res.json())
		.then(res => {
			dispatchTodos({type: SET_STATUS, payload: id});
			dispatchFetch(DONE_FETCHING);
		});
}