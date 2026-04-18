import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../../core/constants/dummy-tasks';
import { NewTask } from './new-task/new-task';
import { type NewTaskModel } from '../../core/models/new-task.model';

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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onTaskCompleted(taskId: string) {
    console.log(`Task with ID ${taskId} completed!`);
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: NewTaskModel) {
    this.tasks.push({
      id: `task-${Date.now()}`,
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.isAddingTask = false;
    console.log('New task added:', task);
  }
}
