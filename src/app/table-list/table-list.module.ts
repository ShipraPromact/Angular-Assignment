import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListAdd } from './table-list-add/table-list-add.component';
import { TableListRoutingModule } from './table-list.routing.module';
import { TableListComponent } from './table-list.component';

@NgModule({
    declarations: [
      //  TableListComponent,
       // TableListAdd,
    ],
  imports: [
      CommonModule,
    //  TableListRoutingModule,
  ]
})
export class TableListModule { }
