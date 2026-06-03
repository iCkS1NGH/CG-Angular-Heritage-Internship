import { Component, signal } from '@angular/core';

//Q2. Create one variable using 'let' and one using 'const'. Explain the difference in comments.
  // `let` can be reassigned later if the value needs to change.
  let cityName: string = 'Chennai';
  // `const` cannot be reassigned after it is initialized.
  const courseName: string = 'Angular Fundamentals';
 //end of solution for Q2 

 //Q4. Create an interface named Student with id, name, branch, and age properties.
 export interface Student {
  id: number;
  name: string;
  branch: string;
  age: number;
}
// end of solution for Q4
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('student-app');
  //Q1-Q3. Create variables: name, age, city, and course using appropriate TypeScript data types && Create variables of type string, number, and boolean.
  name: string = 'icksingh';
  age: number = 20;
  city: string = "Kolkata";
  course: string = "Frontend with Angular"; //end of solution of Q1
  isStudent: boolean = true;  //end of solution for Q3
}