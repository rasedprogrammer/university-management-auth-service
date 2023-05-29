import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
export const port = 5000;
// Use cors
app.use(cors());
// Use Parser
app.use(express.json());
// Use Encade Url
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	res.send("Working Successfully");
});

export default app;
