import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListAdd } from './table-list-add/table-list-add.component';
import { TableListComponent } from './table-list.component';

const userRoutes: Routes =[
  {
        path: '',
        component: TableListComponent,
  }, {
    path: 'add',
        component: TableListAdd,
    },
    {
        path: 'edit/:id', component: TableListAdd
    },
];
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class TableListRoutingModule { }
