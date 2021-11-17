import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class GoodReadsService {

  constructor(private db: AngularFireDatabase) { }

  async getBooks(): Promise<Book[]> {
    let movies: Book[] = [];

    this.db.list<Book>('/goodread_books').valueChanges().subscribe(data => {
      console.log(data);
      data?.forEach(f => {        
      movies.push(f);
      });
    });

    return movies;
    //return this.fireStore.collection<movie>("movies").get();
  }
}
