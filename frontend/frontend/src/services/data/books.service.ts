import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibooks } from 'src/app/models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
    // getBookByDesc(arg0: string) {
    //     throw new Error('Method not implemented.');
    // }

    // books: Ibooks[] = [
    //     {titolo: 'Bones and All', descrizione: 'Libro ambientato nel passato', autore: 'Camille Dabous', pezzi: 10, genere: 'Fantasty', ISBN: '939568241852', prezzo: 10.30, imgUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91ZNOLB9d3L.jpg', active : true, data : new Date()},
    //     {titolo: 'Inferno', descrizione: 'Libro di mitologia cristiana', autore: 'Dante alighieri', pezzi: 7, genere: 'Mitologia', ISBN: '939568241854', prezzo: 10, imgUrl: 'https://www.ibs.it/images/9788806187903_0_536_0_75.jpg', active : true, data : new Date()},
    //     {titolo: 'Purgatorio', descrizione: 'Libro di mitologia cristiana', autore: 'Dante alighieri', pezzi: 7, genere: 'Mitologia', ISBN: '939568241858', prezzo: 10, imgUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71OzqpdnuML.jpg', active : true, data : new Date()},
    //     {titolo: 'Paradiso', descrizione: 'Libro di mitologia cristiana', autore: 'Dante alighieri', pezzi: 7, genere: 'Mitologia', ISBN: '939568241584', prezzo: 10, imgUrl: 'https://www.ibs.it/images/9788806216245_0_536_0_75.jpg', active : true, data : new Date()},
    //     {titolo: 'Verso il Paradiso', descrizione: 'Storia di alcune persone', autore: 'Hanya Yanagihara', pezzi: 7, genere: 'Mitologia', ISBN: '939568241789', prezzo: 15, imgUrl: 'https://www.ibs.it/images/9788807034817_0_424_0_75.jpg', active : true, data : new Date()},
    //     {titolo: 'I grandi Giochi - Nevernight', descrizione: 'Storia di una ragazzina assassina in un mondo fantasy', autore: 'Jay Kristoff', pezzi: 7, genere: 'Mitologia', ISBN: '939568241533', prezzo: 13, imgUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/912koRihZtL.jpg', active : true, data : new Date()},
    //     {titolo: 'Mai Dimenticare - Nevernight', descrizione: 'Storia di una ragazzina assassina in un mondo fantasy', autore: 'Jay Kristoff', pezzi: 7, genere: 'Mitologia', ISBN: '939568241841', prezzo: 13, imgUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91o4FBRvXeL.jpg', active : true, data : new Date()},
    // ]

 private apiUrl = 'http://localhost:8080/api/libri';
 books$: Ibooks[] = [];


  constructor(private httpClient : HttpClient) { }


    // getBooks = () : Ibooks[] => this.books;

    getBookByDesc = (titolo: string) => {
        return this.httpClient.get<Ibooks[]>(`http://localhost:8080/api/libri/ricercaTitolo/${titolo}`);
    }


  getBooksAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/api/libri/catalogo`);
  }
    // getBooksByCode = (ISBN: string) : Ibooks => {
    //     const index = this.books.findIndex(books => books.ISBN === ISBN);
    //     return this.books[index];
    // }

}
