import bookModel from "../models/book.model.js";
import userModel from "../models/user.model.js";

const addBook = async (req, res) => {
	const { _id } = req.user;
	const { title, genre } = req.body;
	try {
		const user = await userModel.findById(_id);
		if (!user || user.role !== "lib") return res.status(403).json({ message: "You are not a lib", success: false });

		const newBook = new bookModel({ title, genre, userId: user._id });
		await newBook.save();

		return res.status(200).json({ message: "Book added successfully", success: true });

	} catch (error) {
		return res.status(500).json({ message: error.message, success: false });
	}
}

const deleteBook = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id);
		if (!user || user.role !== "lib") return res.status(403).json({ message: "You are not a lib", success: false });

		const book = await bookModel.findOneAndDelete({ _id: req.params.id });
		if (!book) return res.status(404).json({ message: "Book not found", success: false });

		return res.status(200).json({ message: "Book deleted successfully", success: true });

	} catch (error) {
		return res.status(500).json({ message: error.message, success: false });
	}
}

const editBook = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id);
		if (!user || user.role !== "lib") return res.status(403).json({ message: "You are not a lib", success: false });

		const updatedBook = await bookModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
		if (!updatedBook) return res.status(404).json({ message: "Book not found", success: false });

		return res.status(200).json({ message: "Book updated successfully", book: updatedBook, success: true });

	} catch (error) {
		return res.status(500).json({ message: error.message, success: false });
	}
}

const getAllBook = async (req, res) => {
	try {
		const books = await bookModel.find({});
		return res.status(200).json({ books });
	} catch (error) {
		return res.status(500).json({ message: error.message, success: false });
	}
}
export default { addBook, deleteBook, editBook, getAllBook };
