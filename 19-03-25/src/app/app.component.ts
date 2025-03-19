import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '19-03-35';
  students = [
    {id:1, name:"Raghuram",age:21,  branch:"IT"},
    {id:2, name:"Varun", age:22, branch:"CSE"},
    {id:3, name:"Sanjay",age:19,  branch:"IT"},
    {id:4, name:"Sai", age:20, branch:"CSM"},
    {id:5, name:"Nishanth", age:18, branch:"ECE"},
    {id:6 , name:"Vasanth",age:21,  branch:"CSD"}
  ];
  selectedStudent:any;
  newStudent:any;
  display:boolean = false;
  toggle(){
    this.display = !this.display;
  }
  deleteStudent(id:any){
    this.students = this.students.filter(students=> students.id != id);
  }
  editStudent(student:any){
    this.selectedStudent = {...student}; 
  }
  updateStudent(){
    const index = this.students.findIndex(student=> student.id === this.selectedStudent.id);
    this.students[index] = this.selectedStudent;
    this.selectedStudent=""
  }
  addStudent(id:any, name:any, age:any,  branch:any){
    this.newStudent = {id:id.value, name:name.value, age:age.value, branch:branch.value};
    this.students.push(this.newStudent);
    this.newStudent = ""
  }
}
