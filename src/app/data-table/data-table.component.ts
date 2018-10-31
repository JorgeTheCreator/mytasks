import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'quoteType',
    'task',
    'dueDate',
    'taskType',
    'edit-view-trash'
  ];

  delete(id) {
    console.log(id);
  }
  selectRow(row) {
    console.log(row['task']);
  }
  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.paginator, this.sort);
  }
}
