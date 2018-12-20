import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDataTableComponent } from './ng-data-table.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { ListComponent } from '../list/list.component';
import { ClickoutsideDirective } from '../clickoutside.directive';
import { ListModule } from '../list/list.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NgDataTableComponent,
    ClickoutsideDirective
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    ListModule
  ],
  exports: [
    NgDataTableComponent
  ]
})
export class NgDataTableModule { }
