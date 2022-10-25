import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  constructor() {}
  developer: Developer = new Developer('John', 'Doe', 25, 'Homme', 'Je code', [
    new Skill('JavaScript', 'Js', 'javascript.com'),
    new Skill('Angular', 'A', 'angular.com'),
    new Skill('Java', 'J', 'java.com'),
  ]);

  ngOnInit(): void {
    console.log('developer:', this.developer);
  }
}
