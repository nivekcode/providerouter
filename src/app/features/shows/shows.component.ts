import {Component} from '@angular/core';
import {NgFor} from "@angular/common";

import {ShowsService} from "./shows.service";
import {ShowCardComponent} from "./show-card/show-card.component";

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [
    ShowCardComponent,
    NgFor
  ],
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent {

  shows = this.showsService.getShows();

  constructor(private showsService: ShowsService) { }

}
