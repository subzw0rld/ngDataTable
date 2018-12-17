import { Component, Input, OnChanges, DoCheck, EventEmitter, Output } from '@angular/core';
import { faSort, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TableOperation } from './table-operation';

@Component({
  selector: 'ng-data-table',
  templateUrl: './ng-data-table.component.html',
  styleUrls: ['./ng-data-table.component.scss']
})
export class NgDataTableComponent implements OnChanges, DoCheck {
  @Input() header: Array<{}>;
  @Input() throttle = 150;
  @Input() tableData: Array<{}>;
  @Output() scrollEvent:EventEmitter<any> = new EventEmitter();
  //For Infinite Scroll
  public scrollDistance = 1;
  public scrollUpDistance = 2;

  public filterData: Array<{}> = [];
  public displayList: Boolean = false;
  private cloneArr: Array<{}>;
  private sortingOption = faSort;
  private closeIcon = faTimes;
  private displaySortMenuItem:Boolean = true;
  private displayFilterMenuItem:Boolean = true;
  private listData: Array<string>;
  private clickBound:{'width', 'height', 'top', 'left'};
  private tableOperation: TableOperation = new TableOperation();
  private sortKey:string;

  constructor() { }

  ngDoCheck() {
    const sortMenu:HTMLElement = document.getElementById('sortMenu');

    if(sortMenu) {
      sortMenu.style.left=Math.round(this.clickBound.width + this.clickBound.left)+ 'px';
      sortMenu.style.top=Math.round(this.clickBound.height + this.clickBound.top)+ 'px';
    }
    
  }

  ngOnChanges() {
    this.cloneArr = this.tableData;
  }

  trackByRow(index, item) {
    return index;
  }

  private displaySortOptions(event, key:string) {
    const target = event.currentTarget;
    const index = target.getAttribute('data-index');
    this.sortKey = key;
    this.clickBound = target.getBoundingClientRect();
    this.listData = [];
    this.displayList = true;
    
   this.displayFilterMenuItem = this.header[index]["displayFilterItem"] === "false" || this.header[index]["displayFilterItem"] == false ? false: true;
   this.displaySortMenuItem = this.header[index]["displaySortItem"] === "false" || this.header[index]["displaySortItem"] == false ? false: true;
        
    let temp = [];
    if(this.displayFilterMenuItem) {
      this.tableData.map(item => {
        if(this.listData.indexOf(item[this.sortKey]) === -1) {
          this.listData.push(item[this.sortKey]);
        }        
      });
    }
  }

  private onRowSelect(selectedItem: {value, selectedIndex, action}) {
    if(selectedItem.action === 'sort') {
      switch(selectedItem.value) {
        case "ascending":
        this.tableOperation.sortAscending(this.tableData, this.sortKey);
        break;
        case "descending":
        this.tableOperation.sortDescending(this.tableData, this.sortKey);
        break;
      }
    }else{
      this.filterData.push({key:this.sortKey, value:selectedItem.value});
      this.refreshTable();
    }

  }

  private removeFilter(index:number) {
    this.filterData.splice(index, 1);
    this.refreshTable();
  }

  private removeAllFilters() {
    this.filterData = [];
    this.refreshTable();
  }

  private refreshTable() {
    this.tableData = this.tableOperation.filterValues(this.cloneArr, this.filterData);
  }
  
  public handleClickOutside() {
    this.displayList = false;
  }

  public onScrollDown(ev) {
    // console.log('scroll down', ev);
    this.scrollEvent.emit({ev});
  }

  public onScrollUp(ev) {
    // console.log('scroll up', ev);
    this.scrollEvent.emit({ev});
  }
}
