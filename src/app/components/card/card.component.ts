import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { Group } from 'types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
  @Input() group!: Group;
  @Input() deleteGroup!: (id: number) => void;
  length = 0;
  popupVisible = false;
  users: any[] = [];
  services: any[] = [];

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

  constructor(private groupService: GroupService) {}

  // deleteGroup(id: number){
  //   this.groupService.deleteGroup(id)
  // }

  setSelected(group: Group){
    this.groupService.setSelected(group);
    console.log(this.groupService.getSelected());
  };

  showPopup() {
    this.popupVisible = true;
  }

  hidePopup() {
    this.popupVisible = false;
  }
}
