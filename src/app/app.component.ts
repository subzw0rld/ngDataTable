import { Component, OnInit } from '@angular/core';
import { DataSourceService } from './data-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngDataTable';
  public headerData = [];
  public tableData = [];
  private rowData = [];
  private rowsToAdd = 10;
  private rowsAdded = 0;

  constructor(private dataSvc: DataSourceService) {

  }

  ngOnInit() {
    this.dataSvc.data.subscribe(resp => {
      this.headerData = resp.header;
      this.rowData = resp.row;
      this.addTableData();
      // this.tableData = resp.row;
    });
  }

  public onScroll(ev) {
    // console.log("onScroll")
    this.addTableData();
  }

  private addTableData() {
    const increment = this.rowsAdded + this.rowsToAdd;
    for(let i = this.rowsAdded; i < increment && this.rowData[i]; i++) {
      this.tableData.push(this.rowData[i]);
      this.rowsAdded++;
    }
  }
}
