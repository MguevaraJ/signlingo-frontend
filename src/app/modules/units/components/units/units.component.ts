import { Component, OnInit } from '@angular/core';

interface IUnit {
  name: string;
}

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent implements OnInit {
  public units: IUnit[] = [];

  constructor() {}

  ngOnInit(): void {
    this.units = [
      {
        name: "Etapa 1",
      },
      {
        name: "Etapa 2",
      },
      {
        name: "Etapa 3",
      },
      {
        name: "Etapa 4",
      },
      {
        name: "Etapa 5",
      },
    ];
  }
}
