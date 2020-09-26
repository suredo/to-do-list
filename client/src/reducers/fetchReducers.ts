import { IFetch } from "../types/types";

export const FETCHING = "FETCHING",
	DONE_FETCHING = "DONE_FETCHING";

	const initial: IFetch = {loading: false, error: false};

	export const fetchReducer = (state = initial, action: string) : IFetch => {
		switch(action){
			case FETCHING:
				state = {...state, loading: true};
				break;
			case DONE_FETCHING:
				state = {...state, loading: false};
				break;
			default:
				break;
		}
		return state;
	}