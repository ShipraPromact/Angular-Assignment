import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { type } from 'jquery';
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
    userDetailId: any;
    showPwd: boolean = true;
    userDetails = new userDetails();
    updatedData = new userDetails();
    constructor(private formBuilder: FormBuilder, private service: TableListService, private route: Router,
        private activatedRoute: ActivatedRoute) { }
    detailForm: [];
    ngOnInit() {
        this.createForm();
        this.activatedRoute.paramMap.subscribe(parameterMap => {
            const id = parseInt(parameterMap.get('id'));
            this.getUser(id);
            if (id) {
                this.showPwd = false;
            }
        })
        

       
    }
    getUser(id: number) {
        this.userDetailId = this.service.getUserById(id).subscribe(data => {
            this.userDetails = data;
            console.log(this.userDetails);
        });
       
    }
    onSubmit(addValue) {

        console.log(addValue.value);
        const uservalue = {
            username: addValue.value.name,
            email: addValue.value.email,
            password: addValue.value.password,
        }
        console.log("user" + uservalue);
        this.service.addBanner(uservalue).subscribe(data => {
            console.log("data" + data);
        }, (err) => {
                console.log("unable to add user", + err);
        })
        this.service.addBanner(addValue).subscribe(
            res => {
              //  this.loader = false;
                //this.message = "banner added successfully";
                this.userDetails = new userDetails();
                console.log("res" + res);
                this.route.navigate(['/table-list']);
            },
            err => { console.log(err); }
        )
        
    }
    updateUser(updatedData) {
        
        this.service.editUser(updatedData).subscribe(res => {
            this.userDetails = new userDetails();
            this.route.navigate(['/table-list']);
        },
            err => {
                console.log(err);
            }
        )
        

    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            'name': [null, Validators.required],
            'email': [null, Validators.required],
            'password': [null],
        });
    }

}
