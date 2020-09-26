import { Router } from "express";
import { TodoController } from "../../controllers/todoController";

const todoController =  new TodoController();

export class TodoRoutes {
	private routes: Router;
	
	constructor(){
		this.routes = Router();
		this.endpoints();
	}

	private endpoints() {
		this.routes.get("/", todoController.getTodos);
		this.routes.post("/addtodo", todoController.addTodo);
		this.routes.get("/gettodobyid", todoController.getTodoById);
		this.routes.delete("/deleteTodo", todoController.deleteTodo);
		this.routes.put("/setStatus", todoController.setStatus);
	}

	public getRoutes() {
		return this.routes;
	}
}