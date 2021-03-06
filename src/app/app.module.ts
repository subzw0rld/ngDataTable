import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
// import { NgDataTableComponent } from './ng-data-table/ng-data-table.component';
// import { ListComponent } from './list/list.component';
// import { ClickoutsideDirective } from './clickoutside.directive';
import { NgDataTableModule } from './ng-data-table/ng-data-table.module';

@NgModule({
  declarations: [
    AppComponent,
    // NgDataTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
