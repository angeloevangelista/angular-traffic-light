import { Component } from '@angular/core';
import { TrafficLightOptions } from '@components/traffic-light-input/traffic-light-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  radioValue: TrafficLightOptions = TrafficLightOptions.Pending;
}
