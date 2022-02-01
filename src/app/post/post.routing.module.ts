import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';

const userRoutes: Routes =[
  {
        path: '',
        component: PostComponent,
  }
];
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }
