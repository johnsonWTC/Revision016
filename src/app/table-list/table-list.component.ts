import { Component, Input, OnInit } from '@angular/core';
import { table } from '../table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

    @Input() tablesList : table [] = []

  ngOnInit(): void {
  }



}
