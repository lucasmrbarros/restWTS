import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    res.send("Welcome to the node.js + TS Api!");
});

app.listen(PORT, () => {
    console.log(`server is running just fine. Port ${PORT}`);
});