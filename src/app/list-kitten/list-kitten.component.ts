import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  constructor() {}

  @Input() kittenList?: Kitten[];
  @Output()
  sendNewUserKittenToParent: EventEmitter<Kitten> = new EventEmitter();

  ngOnInit(): void {}

  createNewUserKitten(kitten: Kitten) {
    this.sendNewUserKittenToParent.emit(kitten);
  }
}
