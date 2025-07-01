import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.html',
  styleUrls: ['./student-form.css']
})
export class StudentForm implements OnInit {
  students: Student[] = [];
  form: FormGroup;
  editMode = false;
  selectedId: number | null = null;
  currentView: 'form' | 'list' | 'view' = 'list';
  cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
  selectedStudent: Student | null = null;

  constructor(private fb: FormBuilder, private service: StudentService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      birth_date: ['', Validators.required],
      is_active: [true],
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.service.getAll().subscribe(data => this.students = data);
  }

  submitForm() {
    if (this.form.invalid) {
      this.markFormGroupTouched();
      return;
    }
    const data = this.form.value;
    if (this.editMode && this.selectedId) {
      data.id = this.selectedId;
      this.service.update(data).subscribe(() => {
        this.resetForm();
        this.loadStudents();
        this.showStudentList();
      });
    } else {
      this.service.add(data).subscribe(() => {
        this.resetForm();
        this.loadStudents();
        this.showStudentList();
      });
    }
  }

  markFormGroupTouched() {
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  edit(student: Student) {
    this.form.patchValue(student);
    this.selectedId = student.id!;
    this.editMode = true;
    this.currentView = 'form';
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.loadStudents());
  }

  resetForm() {
    this.form.reset({ is_active: true });
    this.editMode = false;
    this.selectedId = null;
  }

  showForm() {
    this.currentView = 'form';
  }

  showStudentList() {
    this.currentView = 'list';
    this.selectedStudent = null;
  }

  addNewStudent() {
    this.resetForm();
    this.currentView = 'form';
  }

  cancelEdit() {
    this.resetForm();
    this.currentView = 'list';
  }

  view(student: Student) {
    this.selectedStudent = student;
    this.currentView = 'view';
  }
}
