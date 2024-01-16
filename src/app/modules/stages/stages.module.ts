import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StagesRoutingModule } from './stages-routing.module';
import { StagesComponent } from './component/stages/stages.component';
import { StageComponent } from './component/stage/stage.component';

@NgModule({
  declarations: [
    StagesComponent,
    StageComponent
  ],
  imports: [
    CommonModule,
    StagesRoutingModule,
    SharedModule
  ]
})
export class StagesModule { }
