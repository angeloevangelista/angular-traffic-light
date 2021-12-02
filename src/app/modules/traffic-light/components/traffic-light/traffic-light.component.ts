import { Component, Input, Output } from '@angular/core';

import {
  TrafficLightControlValueAccessor,
  TRAFFIC_LIGHT_CONTROL_VALUE_ACCESSOR,
} from './traffic-light-control-value-accessor';

import { getRandomCode } from './functions/getRandomCode';
import { TrafficLightOptions } from '../../models/traffic-light-options';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
  providers: [TRAFFIC_LIGHT_CONTROL_VALUE_ACCESSOR],
})
class TrafficLightComponent extends TrafficLightControlValueAccessor {
  @Input() optionsToIgnore: TrafficLightOptions[] = [];
  @Input() key: string = `generic-traffic-light-${getRandomCode(8)}`;

  get radioValuesArray(): TrafficLightOptions[] {
    return [
      TrafficLightOptions.Pending,
      TrafficLightOptions.Acceptable,
      TrafficLightOptions.Satisfactory,
      TrafficLightOptions.Unsatisfactory,
    ].filter((radioValue) => !this.optionsToIgnore.includes(radioValue));
  }

  getRadioId(radioValue: TrafficLightOptions): string {
    return `${this.key}-${this.getEnumTranslation(radioValue)}`;
  }

  getEnumTranslation(radioValue: TrafficLightOptions): string {
    const enumTranslation = {
      [TrafficLightOptions.Pending]: 'pending',
      [TrafficLightOptions.Acceptable]: 'acceptable',
      [TrafficLightOptions.Satisfactory]: 'satisfactory',
      [TrafficLightOptions.Unsatisfactory]: 'unsatisfactory',
    };

    return enumTranslation[radioValue];
  }

  getEnumLabel(radioValue: TrafficLightOptions): string {
    const enumTranslation = {
      [TrafficLightOptions.Pending]: 'Pendente',
      [TrafficLightOptions.Acceptable]: 'Razoável',
      [TrafficLightOptions.Satisfactory]: 'Satisfatório',
      [TrafficLightOptions.Unsatisfactory]: 'Insatisfatório',
    };

    return enumTranslation[radioValue];
  }
}

export { TrafficLightComponent };
