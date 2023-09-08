import { Component, SimpleChanges, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GroupService } from 'src/app/group.service';
import { Group } from 'types';

@Component({
  selector: 'app-modiy-card',
  templateUrl: './modiy-card.component.html',
  styleUrls: ['./modiy-card.component.css'],
})
export class ModiyCardComponent {
  @Input() group!: Group;
  @Input() deleteGroup!: (id: number) => void;
  length = 0;
  popupVisible = false;
  users: any[] = [];
  services: any[] = [];
  currentLocation = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['group'] && changes['group'].currentValue) {
      this.length = this.group.functions.length;
      this.users = this.group.users;
      this.services =
        this.length > 4
          ? this.group.functions
              .sort((a, b) => parseInt(a.maxValue) - parseInt(b.maxValue))
              .slice(0, 4)
              .concat({
                title: `+${this.length - 4} Servizi`,
                functionCode: '',
                minValue: '',
                maxValue: '',
              })
          : this.group.functions;
    }
  }

  constructor(private router: Router, private groupService: GroupService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentLocation = event.url;
      }
    });
  }

  // constructor(private groupService: GroupService) {}

  // deleteGroup(id: number){
  //   this.groupService.deleteGroup(id)
  // }

  setSelected(group: Group) {
    this.groupService.setSelected(group);
    console.log(this.groupService.getSelected());
  }

  showPopup() {
    this.popupVisible = true;
  }

  hidePopup() {
    this.popupVisible = false;
  }
}
