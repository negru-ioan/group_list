import { Component, SimpleChanges, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GroupService } from 'src/app/group.service';
import { Group } from 'types';
import { ActivatedRoute } from '@angular/router';

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
  pageId = 0;
  selected = this.groupService.selected();

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['group'] && changes['group'].currentValue) {
  //     this.length = this.selected.functions.length;
  //     this.users = this.selected.users;
  //     this.services =
  //       this.length > 4
  //         ? this.selected.functions
  //             .sort((a, b) => parseInt(a.maxValue) - parseInt(b.maxValue))
  //             .slice(0, 4)
  //             .concat({
  //               title: `+${this.length - 4} Servizi`,
  //               functionCode: '',
  //               minValue: '',
  //               maxValue: '',
  //             })
  //         : this.selected.functions;
  //   }
  // }

  constructor(
    private router: Router,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentLocation = event.url;
      }
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.pageId = id ? Number(id) : 420;
  }

  setSelected(group: Group) {
    this.groupService.setSelected(group.id);
  }

  showPopup() {
    this.popupVisible = true;
  }

  hidePopup() {
    this.popupVisible = false;
  }

  modifyGroup(
    newValue: string,
    inputFor: 'groupName' | 'minValue' | 'maxValue'
  ) {
    this.selected[inputFor] = newValue;
  }
}
