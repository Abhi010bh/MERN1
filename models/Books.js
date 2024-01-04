const mongoose=require("mongoose");

const Books=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    BookId:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
});

const Book = mongoose.model('Book', Books); // Use singular 'Book' for the model name

module.exports = Book; // Export the model directly