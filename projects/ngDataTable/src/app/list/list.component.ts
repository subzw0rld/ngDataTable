import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faSortAmountDown, faSortAmountUp, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-comp',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() listData: Array<string>;
  @Input()displaySort: Boolean = false;
  @Input()displayFilter: Boolean = true;
  @Output()selectedRow: EventEmitter<{}> = new EventEmitter();
  private showList:Boolean = false;

  public sortIcon = faSortAmountDown;
  public descendingIcon = faSortAmountDown;
  public ascendingIcon = faSortAmountUp;
  public filterIcon = faFilter;

  constructor() { }

  public trackingFunction(index, item) {
    return index;
  }

  public onItemClick(item:string, index:number, operation:string) {
    this.selectedRow.emit({value: item, selectedIndex: index, action: operation});
  }

}
