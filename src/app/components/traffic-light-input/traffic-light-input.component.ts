import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  Provider,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

enum TrafficLightOptions {
  Pending = 'P',
  Acceptable = 'R',
  Satisfactory = 'S',
  Unsatisfactory = 'I',
}

const TRAFFIC_LIGHT_INPUT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrafficLightInputComponent),
  multi: true,
};

@Component({
  selector: 'app-traffic-light-input',
  templateUrl: './traffic-light-input.component.html',
  styleUrls: ['./traffic-light-input.component.scss'],
  providers: [TRAFFIC_LIGHT_INPUT_CONTROL_VALUE_ACCESSOR],
})
class TrafficLightInputComponent implements ControlValueAccessor {
  @ViewChild('trafficLightForm') trafficLightForm:
    | ElementRef<HTMLFormElement>
    | undefined;

  @Input() name: string = 'generic-traffic-light-input';
  @Input() initialValue: TrafficLightOptions = TrafficLightOptions.Pending;

  private _innerValue: TrafficLightOptions = this.initialValue;

  get trafficLightOptions() {
    return TrafficLightOptions;
  }

  get value(): any {
    return this._innerValue;
  }

  set value(value: any) {
    if (value !== this._innerValue) {
      this._innerValue = value;
      this.onChangeCallback(value);
    }
  }

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  onBlur() {
    this.onTouchedCallback();
  }

  onRadioInputChange(): void {
    const radioList = this.trafficLightForm?.nativeElement?.elements?.namedItem(
      this.name
    ) as RadioNodeList | undefined;

    console.log(radioList?.value);
  }

  getRadioId(option: TrafficLightOptions) {
    return `${this.name}-${this.getEnumTranslation(option)}`;
  }

  getEnumTranslation(option: TrafficLightOptions) {
    const enumTranslation = {
      [TrafficLightOptions.Pending]: 'pending',
      [TrafficLightOptions.Acceptable]: 'acceptable',
      [TrafficLightOptions.Satisfactory]: 'satisfactory',
      [TrafficLightOptions.Unsatisfactory]: 'unsatisfactory',
    };

    return enumTranslation[option];
  }

  checkItsDefaultChecked(option: TrafficLightOptions) {
    return this.initialValue === option;
  }

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

export { TrafficLightInputComponent, TrafficLightOptions };
