import { Component, OnInit } from '@angular/core';

export interface LessonPackage {
  title: string;
  description: string;
  category: string;
  level: string;
  prerequisite: string[];
  tags: string[];
  copyright: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web3';

  lessonPackage: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: ''
  };
  constructor() {
    console.log('AppComponent.constructor()')
  }
  ngOnInit() {
    console.log('AppComponent.ngOnInit()')
  }
}

