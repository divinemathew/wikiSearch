import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem = '';
  @Output() newSearchItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  passValue() {
    this.newSearchItem.emit(this.searchItem);
  }
  // this.receivedQuery = this.receivedQuery.query.search;

  ngOnInit(): void {}
}
