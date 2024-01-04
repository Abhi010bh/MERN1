const express=require("express");
const router=express.Router();

router.use(express.json());

const Book=require("../models/Books");

//@GET test : books/test
//Tests the routing
router.get('/test',(req,res)=>res.send("Route {localhost:5000/books/test} working"));

//@GET books/
//Gets all the books
router.get('/', (req, res) => {
    Book.find()
        .then(books => {
            if (books.length === 0) {
                return res.status(404).json({ message: 'No books found' });
            }
            return res.json(books);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        });
});

// Get book by specific ID
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => {
            if (!book) {
                return res.status(404).json({ NoSuchBook: "Mentioned Book doesn't exist" });
            }
            return res.json(book);
        })
        .catch(err => res.json(err));
});

//Put books
router.post('/',(req,res)=>{
    console.log(req.body);
    Book.create(req.body)
        .then(book=>{
            console.log("Book added");
            return res.json({message:"Book created successfully"});})
        .catch(err=>{
            console.log(err);
            res.status(400).json({Error:"Unable to add this book"});});
})

module.exports=router;