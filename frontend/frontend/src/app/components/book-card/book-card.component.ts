import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ibooks } from 'src/app/models/books';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor() { }

      @Input ()
    product: Ibooks = {
        titolo: "",
        descrizione: "",
        codbook: "",
        unit: 0,
        categry: "",
        prezzo: 0,
        imgurl: ""

    };

    @Output()
    delete = new EventEmitter;
    @Output()
    edit = new EventEmitter;

  ngOnInit(): void {
  }

//   editArt = () => this.edit.emit(this.book.ISBN);
//   delArt = () => this.delete.emit(this.book.ISBN);


}
