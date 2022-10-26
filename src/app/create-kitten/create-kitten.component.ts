import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
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

  createNewKitten(form: NgForm): void {
    let { name, race, birthDate, imgUrl } = this.newKitten;
    this.sendNewKittenToParent.emit(new Kitten(name, race, birthDate, imgUrl));
    form.reset();
    form.resetForm();
  }
}
