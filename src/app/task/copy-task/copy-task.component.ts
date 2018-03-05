import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {
  lists: any[];
  //Inject 是参数装饰器，用来在类的构造函数中描述非 Type 类型的参数对象。
  // Angular 2 中常用的非 Type 类型 Token：字符串、OpaqueToken对象、InjectionToken对象等。
  constructor(@Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<CopyTaskComponent>) { }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}
