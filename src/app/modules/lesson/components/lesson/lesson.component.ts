import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveDialogComponent } from '../move-dialog/move-dialog.component';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {

  constructor(private matDialog: MatDialog) {}

  public openMove(): void {
    this.matDialog.open(MoveDialogComponent, {
      data: {
        url: "assets/numeros.mp4"
      }
    });
  }
}
