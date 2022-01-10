import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableListService } from './table-list.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html'
})
export class TableListComponent implements OnInit {

    users: any;

    constructor(private userService: TableListService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.getUser().subscribe(data => {
            this.users = data;
        }, (err) => {
            console.log("Unable to get user", + err);
        });
    }
    onEdit(userId) {
        console.log(userId);
        this.router.navigate(['/user-edit/' + userId]);
    }

    onDelete(user) {
        if (confirm(`Are you sure, you want to delete the user: ${user.username}?`)) {
            this.userService.deleteUser(user.id).subscribe(() =>
                this.getUser()
            );
        }
    }
    
}
