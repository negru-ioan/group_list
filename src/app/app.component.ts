import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GroupService } from './group.service';
import { Group } from 'types';

type Paths = {
  [key: string]: {
    header: string;
    footer: string;
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'group_list';
  location = 'Gruppi di firma';
  groups: Group[] = [];
  currentLocation = '';
  paths: Paths = {
    '/': {
      header: 'Acasa',
      footer: 'Nuovo gruppo',
    },
    '/modifica': {
      header: 'Modificare il gruppo',
      footer: "Salva"
    },
    '/nuovo': {
      header: 'Creare un nuovo gruppo',
      footer: "Salva"
    },
  };

  constructor(private router: Router, private groupService: GroupService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentLocation = event.url;
      }
    });

    this.groups = this.groupService.getGroups()
  }
}
