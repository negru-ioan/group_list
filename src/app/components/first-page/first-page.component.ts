import { Component, Input, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { Group } from 'types';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupService: GroupService) {}

  setSelected = (group: Group) => this.groupService.setSelected(group)

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

  deleteGroup(groupId: number): void {
    this.groupService.deleteGroup(groupId);
    // Update the local groups array to reflect the change
    this.groups = this.groupService.getGroups();
  }
}
