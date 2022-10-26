import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  newKitten: Kitten = new Kitten('', '', new Date(), '');

  constructor() {}

  ngOnInit(): void {}

  @Output()
  sendNewKittenToParent: EventEmitter<Kitten> = new EventEmitter();

  createNewKitten(): void {
    this.sendNewKittenToParent.emit(this.newKitten);
  }
}
