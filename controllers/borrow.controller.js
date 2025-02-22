import bookModel from "../models/book.model.js";
import borrowModel from "../models/Borrow.model.js";

const borrowBook = async (req, res) => {
	const { _id } = req.user
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(400).json({ message: "User not found", success: false });
		}

		const findBook = await bookModel.findById(req.params.id);
		if (!findBook) {
			return res.status(400).json({ message: "Book not found", success: false });
		}

		const borrowBook = new borrowModel({
			userId: user._id,
			bookId: findBook._id,
			borrowDate: new Date(),
			returnDate: new Date(new Date().setDate(new Date().getDate() + 14))
		})
		
		await borrowBook.save();

		findBook.status = "BORROWED";
		await findBook.save();

		return res.status(200).json({ message: "Book borrowed successfully", success: true });
	} catch (error) {
		return res.status(500).json({ message: error.message, success: false });
	}
}

const returnBook = async (req, res) => {
	const { _id } = req.user
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(400).json({ message: "User not found", success: false });
		}

		const findBook = await bookModel.findById(req.params.id);

		borrowModel.findOneAndDelete({ userId: _id, bookId: req.params.id });

		findBook.status = "AVAILABLE";
		await findBook.save();

		return res.status(200).json({ message: "Book returned successfully", success: true });
	} catch (error) {
		return res.status(500).json({ message: error.message, success: false });
	}
}

export default { borrowBook, returnBook }