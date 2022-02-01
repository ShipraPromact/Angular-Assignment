import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
declare var $: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
    post: any;
    constructor(private postService: PostService) { }
  
    ngOnInit() {
        this.getPost();
  }

    getPost() {
        this.postService.getPost().subscribe(data => {
            this.post = data;
            console.log(this.post);
        }, (err) => {
            console.log("Unable to get the posts list" + err);
        });
    }
}
