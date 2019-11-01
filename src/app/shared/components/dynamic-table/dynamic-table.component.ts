import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
    displayedColumns;
    columns = [
        { columnDef: 'position', header: 'No.',    cell: (element: any) => `${element.position}` },
        { columnDef: 'name',     header: 'Name',   cell: (element: any) => `${element.name}`     },
        { columnDef: 'weight',   header: 'Weight', cell: (element: any) => `${element.weight}`   },
        { columnDef: 'symbol',   header: 'Symbol', cell: (element: any) => `${element.symbol}`   },
      ];
    ELEMENT_DATA: any[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
    ];
      
    constructor(private router:Router) {}

      ngOnInit() {
        this.displayedColumns = this.columns.map(c => c.columnDef);
        //dataSource = new ExampleDataSource();
      }

}



  
