import { Component } from '@angular/core';
import { StudentForm } from './student/student-form/student-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
