import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
	try {
		const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
		if (!token) return res.status(401).json({ message: "Unauthorized, token not provided", success: false });

		let decode = jwt.verify(token, process.env.JWT_SECRET);
		if (!decode) return res.status(401).json({ message: "Unauthorized, invalid token", success: false });
		req.user = decode;

		next();

	} catch (error) {
		return res.status(500).json({ message: error.message, success: false });
	}
}

export default authMiddleware