import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListAdd } from './table-list-add/table-list-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableListRoutingModule } from './table-list.routing.module';
import { TableListComponent } from './table-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    declarations: [
     //  TableListComponent,
       TableListAdd,
    ],
  imports: [
      CommonModule,
      TableListRoutingModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule 
  ]
})
export class TableListModule { }
