import {Component} from '@angular/core';
import {ShowsService} from "./shows.service";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent {

  shows = this.showsService.getShows();

  constructor(private showsService: ShowsService) { }

}
