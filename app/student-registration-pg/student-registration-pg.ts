import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-student-registration-pg',
  standalone: false,
  templateUrl: './student-registration-pg.html',
  styleUrl: './student-registration-pg.css',
})
export class StudentRegistrationPg {
  studentList: Student[] = [];
  // tmpStudent: Student = new Student();

  // onInputChangeImg(event: Event) {
  //   let target = event.target as HTMLInputElement;
  //   if (target.files && target.files[0]) {
  //     let fileReader = new FileReader();
  //     fileReader.onloadend = () => {
  //       this.tmpStudent.imageSrc = fileReader.result as string;
  //     };
  //     fileReader.readAsDataURL(target.files[0]);
  //   }
  // }

  // onClickButton() {
  //   this.studentList.push(this.tmpStudent);
  //   this.tmpStudent = new Student();
  //   console.log(this.studentList);
  // }
  studentSubs(event: Student) {
    this.studentList.push(event);
  }
}
