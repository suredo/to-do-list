import express from "express";
import cors from "cors";

import * as database from "./database";
import { Routes } from "./routes";

export class Server {
	private app: express.Application;
	constructor(private port: number) {
		this.app = express();
	}

	public async init() {
		this.setupExpress();
		await this.databaseSetup();
	}

	private setupExpress() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(new Routes().getRoutes());
	}
	
	private async databaseSetup(): Promise<void> {
    await database.connect();
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Listening on port ${this.port}`);
		})
	}
}