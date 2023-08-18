import { Component, Input } from '@angular/core';
import { Group } from 'types';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent{
  @Input() groups!: Group[]
}
