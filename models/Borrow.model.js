import mongoose from "mongoose";

const borrowSchema = mongoose.Schema({
	bookId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Book",
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	borrowDate: {
		type: Date,
		required: true
	},
	returnDate: {
		type: Date,
		required: true
	}
}, { timestamps: true, versionKey: false })

const borrowModel = mongoose.model("Borrow", borrowSchema);
export default borrowModel;