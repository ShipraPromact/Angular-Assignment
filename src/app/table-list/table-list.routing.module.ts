import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListAdd } from './table-list-add/table-list-add.component';
import { TableListComponent } from './table-list.component';

const routes: Routes =[
  {
        path: '',
        component: TableListComponent,
  }, {
    path: 'add-user',
        component: TableListAdd,
    
  }
];
@NgModule({
    imports: [RouterModule],
    exports: [RouterModule]
})

export class TableListRoutingModule { }
