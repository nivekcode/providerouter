import {Component, Input} from "@angular/core";
import {Show} from "../shows.model";

@Component({
  selector: 'app-show-card',
  templateUrl: 'show-card.component.html'
})
export class ShowCardComponent {
  @Input() show: Show | undefined;
}
