import { Router } from "express";
import { TodoRoutes } from "./api";

export class Routes {
	private routes: Router;
	constructor(){
		this.routes = Router();
		this.endpoints();
	}

	private endpoints() {
		this.routes.use("/auth", (req, res) => {res.send("Not Implemented")});
		this.routes.use("/api",new TodoRoutes().getRoutes());
	}

	public getRoutes() {
		return this.routes;
	}
}