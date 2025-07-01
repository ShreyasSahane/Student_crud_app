import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost:8000/api/students/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  add(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  update(student: Student): Observable<Student> {
    return this.http.put<Student>(this.apiUrl, student);
  }

  delete(id: number): Observable<any> {
    return this.http.request('delete', this.apiUrl, { body: { id } });
  }
} 