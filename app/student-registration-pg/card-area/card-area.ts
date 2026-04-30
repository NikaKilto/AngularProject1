import { Component, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-card-area',
  standalone: false,
  templateUrl: './card-area.html',
  styleUrl: './card-area.css',
})
export class CardArea {
  @Input()
  students: Student[] = [];
}
