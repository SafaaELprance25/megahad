import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../Employee';
@Component({
  selector: 'app-childtwo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './childtwo.component.html',
  styleUrl: './childtwo.component.css'
})
export class ChildtwoComponent {
@Input()employeesecond!: Employee;
}
