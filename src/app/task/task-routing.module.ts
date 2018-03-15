import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TaskListComponent } from './task-list/task-list.component';
import { TaskHomeComponent } from './task-home/task-home.component';

const routes: Routes = [
    { path: 'tasklist', component: TaskHomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TaskRoutingModule { }