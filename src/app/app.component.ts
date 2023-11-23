import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'megahad';
  username= "peter";
  peter=Date;
  age=30;
    sms(){
    this.title="peter";
    console.log("peter");
}
}