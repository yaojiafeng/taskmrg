import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一:去星巴克买杯咖啡',
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
          owner: {
            id: 1,
            name: '姚家锋',
            avatar: 'avatars:svg-1'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四:完成老板布置的PPT作业',
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
          desc: '任务三:去星巴克买杯咖啡',
          owner: {
            id: 1,
            name: '姚家锋',
            avatar: 'avatars:svg-1'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四:完成老板布置的PPT作业',
          owner: {
            id: 1,
            name: '王力宏',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
