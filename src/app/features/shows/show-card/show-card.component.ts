import {Component, Input} from "@angular/core";
import {NgFor} from "@angular/common";

import {Show} from "../shows.model";

@Component({
  selector: 'app-show-card',
  templateUrl: 'show-card.component.html',
  standalone: true,
  imports: [
    NgFor
  ]
})
export class ShowCardComponent {
  @Input() show: Show | undefined;
}
