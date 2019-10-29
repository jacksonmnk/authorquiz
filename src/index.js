import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        id: 1,
        name: 'Mark Twain',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        id: 2,
        name: 'Joseph Conrad',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Joseph_Conrad.PNG',
        books: ['Heart of Darkness']
    },
    {
        id: 3,
        name: 'J.K. Rowling',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        id: 4,
        name: 'Stephen King',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg',
        books: ['The Shining']
    },
    {
        id: 5,
        name: 'Charles Dickens',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        id: 6,
        name: 'William Shakespeare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    },
    {
        id: 7,
        name: 'Jackson Mwaniki',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    },
    {
        id: 8,
        name: 'Gitundu',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg',
        books: ['Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        authors: authors.find((authors) =>
            authors.books.some((title) =>
                title === answer))
    }
}

const state = {
    turnData: getTurnData(authors)
}

ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
