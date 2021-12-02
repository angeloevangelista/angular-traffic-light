import { forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TrafficLightOptions } from '../../models/traffic-light-options';
import { TrafficLightComponent } from './traffic-light.component';

const TRAFFIC_LIGHT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrafficLightComponent),
  multi: true,
};

abstract class TrafficLightControlValueAccessor
  implements ControlValueAccessor
{
  protected _innerValue: TrafficLightOptions | undefined;

  get value(): any {
    return this._innerValue || TrafficLightOptions.Pending;
  }

  set value(value: any) {
    if (value !== this._innerValue) {
      this._innerValue = value;
      this.onChangeCallback(value);
    }
  }

  protected onTouchedCallback: () => void = () => {};
  protected onChangeCallback: (_: any) => void = () => {};

  writeValue(value: any) {
    if (value !== this._innerValue) {
      this._innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}

export {
  TrafficLightControlValueAccessor,
  TRAFFIC_LIGHT_CONTROL_VALUE_ACCESSOR,
};
