import { Component, inject, Input } from '@angular/core';
import { TaskModel } from '../../../core/models/task.model';
import { Card } from '../../../shared/components/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../core/services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;

  private taskService = inject(TasksService);

  onCompleteTask() {
    // Services Called to remove the task from the list of tasks for the user
    this.taskService.removeTask(this.task.id);
  }
}
