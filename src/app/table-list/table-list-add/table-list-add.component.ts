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
            username: addValue.name,
            email: addValue.email,
            password: addValue.password,
        }
        console.log("user" + uservalue);
        this.service.addBanner(uservalue).subscribe(data => {
            console.log("data" + data);
            this.route.navigate(['/user']);
        }, (err) => {
                console.log("unable to add user", + err);
        })        
    }
    updateUser(updatedData) {
        this.service.editUser(updatedData).subscribe(res => {
            this.userDetails = new userDetails();
            this.route.navigate(['/user']);
        },
            err => {
                console.log(err);
            }
        )
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            'name': [null, Validators.required],
            'email': [null, [Validators.required, Validators.email]],
            'password': [null, Validators.required],
        });
    }

}
