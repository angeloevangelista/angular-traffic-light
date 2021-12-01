import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrafficLightInputComponent } from '@components/traffic-light-input/traffic-light-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TrafficLightInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
