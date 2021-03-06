import { Component, OnInit, HostBinding } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一:去星巴克买杯咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '李艺晨',
            avatar: 'avatars:svg-1'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二:完成老板布置的PPT作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '赵丹娜',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三:去星巴克买杯咖啡',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '姚家锋',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四:完成老板布置的PPT作业',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王力宏',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务五:去星巴克买杯咖啡',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '姚家锋',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务六:完成老板布置的PPT作业',
          completed: true,
          priority: 2,
          owner: {
            id: 1,
            name: '王力宏',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },
  ]
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }
  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, { data: { title: '新建任务' } });
  }
  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }
  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '修改任务', task: task } });
  }
  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除列表', content: '您确认删除该列表吗？' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '更改列表名称：' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '新建列表：' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
