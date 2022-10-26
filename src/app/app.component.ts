import { Component } from '@angular/core';
import { KITTENS } from './mockKitten';
import { Kitten } from './models/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  kittenList: Kitten[] = KITTENS;
  userKittenList: Kitten[] = [];

  onReceiveNewUserKitten(event: Kitten) {
    this.userKittenList.push(event);
    this.kittenList = this.kittenList.filter(
      (kitten) => kitten.name !== event.name
    );
  }

  onReceiveNewKitten(event: Kitten) {
    this.kittenList.push(event);
  }
}
