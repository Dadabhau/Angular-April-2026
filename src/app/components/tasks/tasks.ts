import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../../core/constants/dummy-tasks';
import { NewTask } from './new-task/new-task';
import { type NewTaskModel } from '../../core/models/new-task.model';
import { TasksService } from '../../core/services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;
  tasks = dummyTasks;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    // Service method to get tasks for the selected user
    return this.tasksService.getUsersTasks(this.userId);

    // return this.tasks.filter((task) => task.userId === this.userId);
  }

  onTaskCompleted(taskId: string) {
    console.log(`Task with ID ${taskId} completed!`);
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
