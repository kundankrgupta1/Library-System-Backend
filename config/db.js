import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const ConnectDB = async () => {
	try {
		const dbConnection = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DBNAME}`)
		console.log(`✅ [DATABASE]: MongoDB Connected: ${dbConnection.connection.host}`)
	} catch (error) {
		throw new Error(`❌ [Error]: error`)
	}
}

export default ConnectDB;