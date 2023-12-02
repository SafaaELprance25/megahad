import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import{Component}from '@angular/core';
import { Employee } from './Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'appname';
  employee!:Employee;
  getData(data:Employee)
 {this.employee=data}
 //  username= "peter";
//<!--  peter=Date;
 // age=30;
 //   sms(){
   // this.title="peter";
   // console.log("peter");
   // const fontSizePx = 16; -->
//@ViewChild(HomeComponent ,{static:true}) mychild!:HomeComponent;
  
//count = 0  ;


//add(){

  //this.count++;
//}

//min(){

//this.count--;
//this.count--;

}
//}

//<label for="username">Username:</label>
  //  <input type="text" id="username" name="username" [(ngModel)]="user.username" required>-->