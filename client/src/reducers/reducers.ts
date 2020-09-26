import { IAction, ITodos } from "../types/types";

const initial: Array<ITodos> = [];

export const GET_ALL_TODOS= "GET_ALL_TODOS",
	ADD_TODO = "ADD_TODO",
	GET_TODO = "GET_TODO",
	DELETE_TODO = "DELETE_TODO",
	SET_STATUS = "SET_STATUS",
	FILTER_ALL = "FILTER_ALL",
	FILTER_DONE= "FILTER_DONE",
	FILTER_NOT_DONE = "FILTER_NOT_DONE";

export const todoReducer = (state = initial, action: IAction) : ITodos[] => {
	switch(action.type){
		case GET_ALL_TODOS:
			state = action.payload;
			break;
		case ADD_TODO:
			state = state = [...state, action.payload];
			break;
		case DELETE_TODO:
			state = state.filter(todo => todo._id != action.payload);
			break;
		case SET_STATUS:
			state = state.map(todo => {
				if(todo._id === action.payload){
					return {...todo, status: !todo.status};
				} 
				return todo;
			});
			break;
		default:
			break;
	}
	return state;
}