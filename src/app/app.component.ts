import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GroupService } from './group.service';
import { Group } from 'types';

type Paths = {
  [key: string]: {
    header: string;
    footer: string;
    goTo: string;
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
      goTo: '/nuovo',
    },
    '/modifica': {
      header: 'Modificare il gruppo',
      footer: 'Salva',
      goTo: '/',
    },
    '/nuovo': {
      header: 'Creare un nuovo gruppo',
      footer: 'Modifica',
      goTo: '/modifica',
    },
  };

  constructor(private router: Router, private groupService: GroupService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentLocation = event.url.replace(/\/\d+$/, '');
        console.log(this.currentLocation);
      }
    });

    this.groups = this.groupService.groups();
  }
}
