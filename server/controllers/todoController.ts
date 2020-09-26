import { Request, Response } from "express";
import todo from "../models/todoModel";

export class TodoController{
	public getTodos(req: Request, res: Response) {
		todo.find({})
			.then(response => res.send(response))
			.catch(err => console.log(err));
	}

	public addTodo(req: Request, res: Response) {
		const data = req.body.todo;
		todo.create({todo: data})
			.then(response => res.send(response))
			.catch(err => console.log(err));
	}

	public getTodoById(req: Request, res: Response) {
		const id = req.body.id;
		todo.findById(id)
			.then(response => res.send(response))
			.catch(err => console.log(err));
	}

	public deleteTodo(req: Request, res: Response) {
		const id = req.body.id;
		todo.findByIdAndRemove(id)
			.then(response => res.send(response))
			.catch(err => console.log(err));
	}

	public setStatus(req: Request, res: Response) {
		const id = req.body.id;
		const status = req.body.status;
		todo.findByIdAndUpdate(id, {$set: { status: status }})
			.then(response => res.send(response))
			.catch(err => console.log(err));
	}
}