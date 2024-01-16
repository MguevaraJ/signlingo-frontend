import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.scss'
})
export class UnitComponent {
  @Input("title") public title: string = "";

  constructor() {}
}
