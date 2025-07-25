import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationInterface } from './housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocationInterface;
}