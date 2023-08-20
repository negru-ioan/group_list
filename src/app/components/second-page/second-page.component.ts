import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { Group } from 'types';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit{
  groups: Group[] = []
  selected: Group = this.groupService.getSelected()

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groups = this.groupService.getGroups()
    this.selected = this.groupService.getSelected()
  }
}
