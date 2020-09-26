import mongoose, { Mongoose } from "mongoose";

const db = "mongodb+srv://todoApp:kLzvrtme11hxEC3i@cluster0.nolvm.mongodb.net/todoApp?retryWrites=true&w=majority";

export const connect = async (): Promise<Mongoose> => {
	return await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
  