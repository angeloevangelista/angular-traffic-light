import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TrafficLightComponent],
  exports: [TrafficLightComponent],
})
class TrafficLightModule {}

export { TrafficLightModule };
