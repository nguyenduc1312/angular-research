import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';


@Component({
  selector: 'app-book',
  standalone: false,

  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  bookList: BookModel[] = [];
  bookListKey = 'bookList';
  book: BookModel = {
    id: 1,
    title: '',
    author: ''
  };

  ngOnInit(): void {
    let savedBooks = localStorage.getItem(this.bookListKey);
    this.bookList = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addNew() {
    if (this.book.author.trim().length && this.book.author.trim().length) {
      let newBook: BookModel = {
        id: Date.now(),
        title: this.book.title,
        author: this.book.author
      };

      this.bookList.push(newBook);
      localStorage.setItem(this.bookListKey, JSON.stringify(this.bookList));
    } else {
      alert('input reuiered fields');
    }
  }

  remove(id: number) {
    let index = this.bookList.findIndex(item => item.id == id);
    this.bookList.splice(index,1);
    localStorage.setItem(this.bookListKey, JSON.stringify(this.bookList));
  }
}

