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
  paths: Paths = {
    '/': {
      // header: 'Acasa',
      // footer: 'Nuovo gruppo',
      // goTo: '/modifica/' + this.id,
      header: 'Creare un nuovo gruppo',
      footer: 'Nuovo gruppo',
      goTo: '/modifica/' + this.randomId,
    },
    '/modifica': {
      header: 'Modificare il gruppo',
      footer: 'Salva',
      goTo: '/',
    },
    // '/nuovo': {
    //   header: 'Creare un nuovo gruppo',
    //   footer: 'Modifica',
    //   goTo: '/modifica/' + this.randomId,
    // },
    '/preview': {
      header: "Visualizzare l'anteprima del gruppo",
      footer: 'Modifica',
      goTo: '/modifica/' + this.id,
    },
  };

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
    this.randomId = this.randNum();
  }

  saveGroup() {
    const id = Number(this.id);
    if (id && this.currentLocation === '/modifica') {
      this.groupService.setSelectedInGroups(id);
    }
    if (this.currentLocation === '/nuovo') {
      // this.groupService.setSelectedInGroups(-1);

      // this.groupService.selected.set(
      //   this.groupService.initSelected(-1, this.randomId)
      // );
      this.groupService.setSelected(this.randomId);
    }
    console.log(
      this.id,
      id,
      this.groupService.selected(),
      'newSelected from app'
    );
    console.log(this.randomId, this.randomId, 'this.randomId');
  }

  // this.groupService.selected.set(this.groupService.initSelected(Number(id)));
}
