
import { Component,ViewChild,ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 productprice="798";
 productwhgt="111";
 product="sssa";
 textvalue="  ";
 red="false";
 green="true";
 getinput(){
  this.product="gtuyih"
 }
 getdata(){
  return"newvalue";
 }
 changecolor(){
  this.red=!this.red;
  this.green=!this.green;
 }
}
@ViewChild(MenuComponent , {static:true }  ) child! :MenuComponent ;