import { Component, OnInit } from '@angular/core';

interface IStage {
  name: string;
  average: number;
}

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.scss'
})
export class StagesComponent implements OnInit {
  public stages: IStage[] = [];

  constructor() {}

  ngOnInit(): void {
    this.stages = [
      {
        name: "Etapa 1",
        average: 10
      },
      {
        name: "Etapa 2",
        average: 50
      },
      {
        name: "Etapa 3",
        average: 40
      },
      {
        name: "Etapa 4",
        average: 90
      },
      {
        name: "Etapa 5",
        average: 70
      },
    ];
  }
}
