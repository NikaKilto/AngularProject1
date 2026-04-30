import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-form-area',
  standalone: false,
  templateUrl: './form-area.html',
  styleUrl: './form-area.css',
})
export class FormArea {
  @Output()
  studentEventEmitter: EventEmitter<Student> = new EventEmitter();
  tmpStudent: Student = new Student();

  onInputChangeImg(event: Event) {
    let target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.tmpStudent.imageSrc = fileReader.result as string;
      };
      fileReader.readAsDataURL(target.files[0]);
    }
  }

  onClickButton() {
    this.studentEventEmitter.emit(this.tmpStudent);
    // this.studentList.push(this.tmpStudent);
    this.tmpStudent = new Student();
    // console.log(this.studentList);
  }
}
