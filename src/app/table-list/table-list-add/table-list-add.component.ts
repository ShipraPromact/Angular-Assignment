import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { userDetails } from '../../shared/userDetailsAC.model';
import { TableListService } from '../table-list.service';

@Component({
  selector: 'app-table-list-add',
    templateUrl: './table-list-add.component.html'
})
export class TableListAdd implements OnInit {
    formGroup: FormGroup;
    selected: string;
    userDetails = new userDetails();
    constructor(private formBuilder: FormBuilder, private service: TableListService) { }
    detailForm: [];
    ngOnInit() {
        this.createForm();
  }
    onSubmit(addValue) {
        console.log(addValue);
        this.service.addBanner(addValue).subscribe(
            res => {
              //  this.loader = false;
                //this.message = "Banner added successfully";
                this.userDetails = new userDetails();
                console.log("Res" + res);
              
            },
            err => { console.log(err); }
        )
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            'name': [null],
            'email': [null, Validators.required],
            'firstname': [null, [Validators.required]],
            'role': [''],
        });
    }

}
