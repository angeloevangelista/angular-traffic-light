import { Component, OnInit } from '@angular/core';

import { TrafficLightOptions } from './modules/traffic-light/models/traffic-light-options';

interface Person {
  id: number;
  name: string;
  status?: TrafficLightOptions;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  jsonOutput: string = '';
  radioValue: TrafficLightOptions = TrafficLightOptions.Satisfactory;

  people: Person[] = [
    {
      id: 1,
      name: 'John',
      status: TrafficLightOptions.Pending,
    },
    {
      id: 2,
      name: 'Jane',
      status: TrafficLightOptions.Satisfactory,
    },
    {
      id: 3,
      name: 'Bob',
      status: TrafficLightOptions.Acceptable,
    },
    {
      id: 4,
      name: 'Sarah',
    },
    {
      id: 5,
      name: 'Anne',
      status: TrafficLightOptions.Satisfactory,
    },
  ];

  ngOnInit(): void {
    this.updateJsonOutput();
  }

  updateJsonOutput() {
    this.jsonOutput = JSON.stringify(this.people, null, 2);
  }

  printOnConsole() {
    console.table(this.people);
  }
}
