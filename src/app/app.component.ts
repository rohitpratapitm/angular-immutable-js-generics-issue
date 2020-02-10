import { Component } from '@angular/core';
import {Set} from 'immutable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // passing NUMBERS in a set of STRING
  wrongSet: Set<string> = Set<string>([1,2,3]);
  correctSet: Set<string> = Set<string>(['1','2','3']);
}
