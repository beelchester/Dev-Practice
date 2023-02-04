import { cats } from "../../../data";

// [id] is a dynamic route parameter

export default function handler(req, res) {
const { id } = req.query;
const cat = cats.find((cat) => cat.id === Number(id));
res.status(200).json(cat);
}