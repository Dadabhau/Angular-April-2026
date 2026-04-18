import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from '../../../core/models/task.model';
import { Card } from '../../../shared/components/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;
  @Output() taskCompleted = new EventEmitter<string>();

  onCompleteTask() {
    this.taskCompleted.emit(this.task.id);
  }
}
