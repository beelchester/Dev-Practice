// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cats } from "../../../data";

// can be accessed at: http://localhost:3000/api/hello

export default function handler(req, res) {
  res.status(200).json(cats)
}
