import { Component } from '@angular/core';
import { groupList } from 'data/groupList';
import { Group } from 'types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'group_list';
  location = "Gruppi di firma"
  groups = groupList

}
