import { Document, model, Schema } from "mongoose";

interface ITodo extends Document {
	todo: string,
	status?: boolean
}

const Todo = new Schema({
	todo: {type: String, required: true},
	status: {type: Boolean, default: false}
},{
	versionKey: false
});

export default model<ITodo>("Todo", Todo);