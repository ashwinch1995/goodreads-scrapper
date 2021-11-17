import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { GoodReadsService } from 'src/app/services/good-reads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  constructor(private goodreads: GoodReadsService) { }

  ngOnInit(): void {
    this.goodreads.getBooks().then(data => {
      this.books = data;
    });
  }

}
