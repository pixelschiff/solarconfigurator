import { Component, OnInit } from '@angular/core';
import { ConfiguratorModel } from './configurator-model';
//import { ConfiguratorSizingModel } from './configurator-sizing-model';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {

  solarImage = './images/solar-terrassen-foto.jpg';

  model = new ConfiguratorModel('Holz', '4,20', true, 'West', 20535, 50);

  roofDirections = ['Süd', 'Süd-Ost', 'Ost', 'Süd-West', 'West'];

  //sizings = ConfiguratorSizingModel;

  sizings = [
            {
                width: 4.5,
                deep: 3.2,
                modules: 12,
                KWp: 1.92
            },
            {
                width: 5.25,
                deep: 3.2,
                modules: 12,
                KWp: 2.24
            },
            {
                width: 6,
                deep: 3.2,
                modules: 16,
                KWp: 2.56
            },
            {
                width: 6.75,
                deep: 3.2,
                modules: 18,
                KWp: 2.88
            },
            {
                width: 7.5,
                deep: 3.2,
                modules: 20,
                KWp: 3.2
            },
            {
                width: 8.25,
                deep: 3.2,
                modules: 22,
                KWp: 3.52
            },
            {
                width: 9,
                deep: 3.2,
                modules: 24,
                KWp: 3.84
            },
            {
                width: 4.5,
                deep: 4.7,
                modules: 18,
                KWp: 2.88
            },
            {
                width: 5.25,
                deep: 4.7,
                modules: 21,
                KWp: 3.36
            },
            {
                width: 6,
                deep: 4.7,
                modules: 24,
                KWp: 3.84
            },
            {
                width: 6.75,
                deep: 4.7,
                modules: 27,
                KWp: 4.32
            },
            {
                width: 7.5,
                deep: 4.7,
                modules: 30,
                KWp: 4.8
            },
            {
                width: 8.25,
                deep: 4.7,
                modules: 33,
                KWp: 5.28
            },
            {
                width: 9,
                deep: 4.7,
                modules: 36,
                KWp: 5.76
            }
         ];

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

  constructor() { }

  ngOnInit() {
     console.log('siz', this.sizings);
  }

}
