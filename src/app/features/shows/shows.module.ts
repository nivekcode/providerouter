import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import {ShowCardComponent} from "./show-card/show-card.component";

@NgModule({
  declarations: [
    ShowsComponent,
    ShowCardComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ]
})
export class ShowsModule { }
