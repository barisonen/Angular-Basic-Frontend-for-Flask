import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Book {'title': string, 'author': string, 'year_published': string};


@Component({
  selector: 'app-titles-list',
  templateUrl: './titles-list.component.html',
  styleUrls: ['./titles-list.component.css']
})


export class AuthorsListComponent {
  
  @Input() book: Book;
  @Input() books: Array<Book>;
  constructor(private http: HttpClient) { 
    this.book = {'title':'', 'author':'', 'year_published':''};
    this.books = new Array<Book>();
    
  }
  
  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:5000/books/all').subscribe(response => {
      response.forEach((element: { title: string; author: string; year_published: string; }) => {
        var aBook: Book = {
            title: element.title,
            author: element.author,
            year_published: element.year_published
        }
        this.book = aBook;
        this.books.push(aBook);
      });
    })
  
  }
}

