import { Component, OnInit } from '@angular/core';

import template from './custom-div.component.html';
import style from './custom-div.component.css';

@Component({
  selector: 'custom-div',
  template: template + '',
  styles: [ style + '' ]
})
export class CustomDivComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
