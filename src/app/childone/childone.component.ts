import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { setPostSignalSetFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-childone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './childone.component.html',
  styleUrl: './childone.component.css'
})
export class ChildoneComponent {
output() employeedata:EventEmitter<Employee>= new EventEmitter<Employee>();
employees:Employee[]=[

{
  id:1,
  name:sjj,
  city:Wuui,


},
{
  id:2,
  name:jir,
  city:Wuui,


},
{
  id:3,
  name:syyjj,
  city:Wuui,


},
{
  id:4,
  name:sjggg,
  city:Wuui,


},
employeeDetails(employee :Employee):void{
this.employeedata.emit(employee);

}
]
}
