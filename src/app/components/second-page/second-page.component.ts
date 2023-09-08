import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { Group } from 'types';
import { functions, users } from 'data/groupList';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent implements OnInit {
  users = [...users];
  groups: Group[] = [];
  selected: Group = this.groupService.getSelected();
  inModifyPage = !window.location.href.includes('modifica');
  functions = functions.map((func) => ({
    ...func,
    gorupFunct: this.selected.functions.find(
      (funct) => funct.functionCode === func.function_code
    ),
  }));

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groups = this.groupService.getGroups;
    this.selected = this.groupService.getSelected();

    this.users = users.map((user) => ({
      ...user,
      checked: !!this.selected.users.find((usr) => usr.userId === user.userId),
    }));
    console.log(this.users);
  }
}
