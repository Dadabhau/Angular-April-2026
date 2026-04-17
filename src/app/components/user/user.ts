import {
  Component,
  signal,
  computed,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { UserModule } from '../../core/models/user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({ required: true }) user!: UserModule;
  @Output() userSelected = new EventEmitter<string>();

  // output signal with types
  // userSelected = output<string>();

  // input signal with types, required and default value
  // avatar = input.required<string>();
  // name = input.required<string>();

  //Computed with input signal image path
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // selectedUser = DUMMY_USERS[randomIndex];

  // With Signal, we can define a getter that computes the image path based on the selected user's avatar. This allows us to easily update the image source in the template whenever the selected user changes.
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // Getter to compute the image path based on the selected user's avatar
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //   console.log('Selected user:', this.selectedUser());
  // }

  onSelectUser() {
    this.userSelected.emit(this.user.id);
  }
}
