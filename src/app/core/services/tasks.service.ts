import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { dummyTasks } from '../constants/dummy-tasks';
import { type NewTaskModel } from '../models/new-task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: TaskModel[] = dummyTasks;

  getUsersTasks(userId: string): TaskModel[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTaskModel, userId: string) {
    this.tasks.push({
      id: `task-${Date.now()}`,
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
