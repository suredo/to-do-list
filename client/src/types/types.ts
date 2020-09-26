import { ReactNode } from "react";

export type ITodos = {
	_id: string,
	todo: string,
	status: boolean
}

export type IFetch = {
	loading: boolean,
	error: boolean
}

export interface IAction {
	type: string,
	payload: any
}

export interface IContext {
	todos: Array<ITodos>,
	fetch: IFetch,
	dispatchTodos: Function,
	dispatchFetch: Function
}

export interface IProps {
  children: ReactNode
}