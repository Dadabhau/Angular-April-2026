import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // With Signal, we can define a getter that computes the image path based on the selected user's avatar. This allows us to easily update the image source in the template whenever the selected user changes.
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // Getter to compute the image path based on the selected user's avatar
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log('Selected user:', this.selectedUser());
  }
}
