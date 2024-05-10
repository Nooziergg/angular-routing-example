import { Component } from '@angular/core';


@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {
  //add an ng model called 'id' to the input field
  id: string = '';
}
