/*****************************************************************************
* File Name: book.js                                                         *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/10/21 14:00                                                       *
* Status: done                                                               *
******************************************************************************/


/*---------------------------------------------------------------------------*/
/* This function prints some specific properties of an object */
const BookDetails = (book_obj) => {
    console.log(`The book ${book_obj['book_name']} was written by ${book_obj['book_author']} 
      in the year ${book_obj.book_publishing_year}`);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction() 
{
    'use strict';

    let book_obj = {
        book_name: 'Harry Potter',
        book_author: 'J.K.Rowling',
        book_genre: 'fantasy novel',
        book_publishing_year: 1997,
        country: 'United Kingdom',
    };

    console.log(book_obj);

    BookDetails(book_obj);

}; MainFunction();