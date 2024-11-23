import { Router, Request, Response } from "express"
import sql from "../db";

const router = Router();

interface Book {
    id: number;
    title: string;
    author: string;
}

const books: Book [] = [

];

router.post("/books", (req: Request, res: Response) =>{
    /*
    const newBook: Book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook); */

    res.status(201);
});

router.get("/books/:id", (req: Request, res: Response) =>
{
    const bookId = parseInt (req.params.id);
    const book = books.find(b => b.id == bookId);

    if(book)
    {
        res.json(book);
    }
    
    res.status(404).json({message: "Book not found"});
});

router.put("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id == bookId);

    if (bookIndex !== -1)
    {
        books[bookIndex] = {id: bookId, title: req.body.title, author: req.body.author};
        res.json(books[bookIndex]);
    }
    res.status(404).json({ message: "book not found" });
});

router.delete("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id == bookId);

    if (bookIndex !== -1)
    {
        books.splice(bookIndex, 1);
        res.status(204).send();
    }

    res.status(404).json({ message: "Book not found" });
});

export default router;
