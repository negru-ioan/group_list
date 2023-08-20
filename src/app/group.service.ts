import { Injectable } from '@angular/core';
import { groupList } from 'data/groupList';
import { Group } from 'types';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups: Group[] = groupList;
  private selected: Group = this.groups[0]

  setSelected(group: Group): void {
    this.selected = group
    console.log(this.selected)
  }

  getSelected(): Group {
    return this.selected
  }

  setGroups(groups: Group[]): void {
    this.groups = groups;
  }

  getGroups(): Group[] {
    return this.groups;
  }

  deleteGroup(id: number): void {
    const i = this.groups.findIndex(group => group.id === id);
    if (i !== -1) {
      this.groups.splice(i, 1);
    }
    console.log(this.getGroups())
  }
}
