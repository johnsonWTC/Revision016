import { Component, OnInit } from '@angular/core';
import { table } from '../table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  tables : table [] = [];

  ngOnInit(): void {
    this.tables = [
      {
        size: "big",
        type: "round"
      },
      {
        size: "Small",
        type: "Squre"
      },
      {
        size: "Large",
        type: "Rectangle"
      }
    ]
  }



  

}
