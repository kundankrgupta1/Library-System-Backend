import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import app from "./app/app.js";
dotenv.config();
const PORT = process.env.PORT || 5000
ConnectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`🌐[Server]: Server is running at http://localhost:${PORT}`)
		})
	})
	.catch(error => (console.error(`❌ [Error]: Database connection error: ${error}`)))
	