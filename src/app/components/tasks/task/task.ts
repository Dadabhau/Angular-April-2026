import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../core/models/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;
}
