import { Component, Input, OnInit } from '@angular/core';
import { BookDetail } from '../book-detail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: BookDetail;

  constructor() { }

  ngOnInit() {
  }

}
