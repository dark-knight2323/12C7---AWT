import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = "Displaying list of students using Sturctural Directives";
  students = [{ id: "1", name: "Raghuram", age: "19" }, 
    { id: "2", name: "Varun", age: "20" }, 
    { id: "3", name: "Sanjay", age: "21" }, 
    { id: "4", name: "Sai", age: "22" },
    { id: "5", name: "Nishanth", age: "23" }];
    display :boolean  = false;
    toggle(){
      this.display = !this.display;
    }
}
