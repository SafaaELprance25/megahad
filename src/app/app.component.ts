import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  console = console;

  constructor(private consoleToggleService: ConsoleToggleService) 
{
 this.consoleToggleService.disableConsoleInProduction();
     }
  title = 'megahad';
  username= "peter";
  peter=Date;
  age=30;
    sms(){
    this.title="peter";
    console.log("peter");
    const fontSizePx = 16;
viewchild(HomeComponent,{statechild})child!:HomeComponent;
    add(){
      this.child.add();
    }
    min(){
      this.child.min();
    }
}
}