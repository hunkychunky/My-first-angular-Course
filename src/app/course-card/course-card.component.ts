import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/db-data';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  title:string;


  constructor() { }

  ngOnInit(): void {
  }

}
