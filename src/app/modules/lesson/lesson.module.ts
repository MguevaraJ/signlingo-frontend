import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonRoutingModule } from './lesson-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LessonComponent } from './components/lesson/lesson.component';

@NgModule({
  declarations: [
    LessonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
