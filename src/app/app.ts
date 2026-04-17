import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './components/tasks/tasks';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular-April-2026');
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    console.log('Selected user ID:', id);
    this.selectedUserId = id;
  }

  get userSelected() {
    return this.users.find((user) => user.id === this.selectedUserId)! || 'Unknown User';
  }
}
