import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	// description: {
	// 	type: String,
	// 	required: true
	// },
	// author: {
	// 	type: String,
	// 	required: true
	// },
	genre: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: ["AVAILABLE", "BORROWED"],
		default: "AVAILABLE",
	},
	// cover: {
	// 	type: String,
	// 	required: true
	// },
	// rating: {
	// 	type: Number,
	// 	required: true
	// },
	// reviews: {
	// 	type: Number,
	// 	required: true
	// },
	// releaseDate: {
	// 	type: String,
	// 	required: true
	// },
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
}, { timestamps: true, versionKey: false })

const bookModel = mongoose.model("Book", bookSchema)
export default bookModel;