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
  randNum = () => Math.floor(Math.random() * 1000);
  title = 'group_list';
  location = 'Gruppi di firma';
  groups: Group[] = [];
  randomId = this.randNum();
  id = window.location.href.slice(21).match(/\d+/)?.[0];
  currentLocation =
    window.location.pathname.length > 1
      ? window.location.pathname.replace(/\/\d+$/, '')
      : '/';

  constructor(private router: Router, private groupService: GroupService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentLocation =
          window.location.pathname.length > 1
            ? window.location.pathname.replace(/\/\d+$/, '')
            : '/';
        const newId = window.location.href.slice(21).match(/\d+/)?.[0];
        this.id = newId ? newId : this.id;
      }
    });

    this.groups = this.groupService.groups();
  }

  paths: Paths = {
    '/': {
      header: 'Creare un nuovo gruppo',
      footer: 'Nuovo gruppo',
    },
    '/modifica': {
      header: 'Modificare il gruppo',
      footer: 'Salva',
    },
    '/preview': {
      header: "Visualizzare l'anteprima del gruppo",
      footer: 'Modifica',
    },
  };

  saveGroup() {
    this.randomId = this.randNum();
    const id = Number(this.id);
    const location = this.currentLocation;
    let goTo = '/';
    if (id && location === '/modifica') {
      this.groupService.setSelectedInGroups(id);
    } else if (location === '/') {
      this.groupService.selected.set(
        this.groupService.initSelected(-1, this.randomId) // init new selected
      );
      goTo = '/modifica/' + this.randomId;
    } else {
      this.groupService.setSelected(id);
      goTo = '/modifica/' + id;
    }

    this.router.navigate([goTo]);
  }
}
