import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  user: User = new User('', '', '', '');

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.user);
  }
}
