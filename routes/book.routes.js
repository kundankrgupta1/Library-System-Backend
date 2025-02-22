import bookController from "../controllers/book.controller.js";
import borrowController from "../controllers/borrow.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

import express from "express";
const bookRouter = express.Router();
bookRouter.post("/add", authMiddleware, bookController.addBook);
bookRouter.delete("/:id", authMiddleware, bookController.deleteBook);
bookRouter.patch("/:id", authMiddleware, bookController.editBook);
bookRouter.get("/all", bookController.getAllBook);
bookRouter.put("/borrow/:id", authMiddleware, borrowController.borrowBook);
bookRouter.put("/return/:id", authMiddleware, borrowController.returnBook);

export default bookRouter;