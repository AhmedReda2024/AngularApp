import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userName: string = 'ahmed';

  flag: boolean = true;

  color: string = 'red';

  myStyles: object = {
    'background-color': this.flag === true ? 'green' : '',
    color: this.flag === true ? 'tomato' : '',
  };
}
