import { group } from '@angular/animations';
import { Injectable, signal, Signal, computed } from '@angular/core';
import { groupList } from 'data/groupList';
import { Group } from 'types';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  groups = signal<Group[]>(
    groupList.map((group) => {
      return {
        ...group,
        functions: group.functions.sort(
          (a, b) => Number(a.maxValue) - Number(b.maxValue)
        ),
      };
    })
  );
  selected = this.groups()[2];

  setSelected(group: Group): void {
    this.selected = group;
  }

  setSelectedInGroups(payload: Group) {
    this.groups.mutate((val) => {
      const index = val.findIndex((group) => group.id === payload.id);
      val[index] = payload;
    });
  }

  deleteGroup(id: number): void {
    const i = this.groups().findIndex((group) => group.id === id);
    if (i !== -1) {
      this.groups.mutate((val) => val.splice(i, 1));
    }
  }

  modifyGroup(id: number, modifiedGroup: Group) {
    this.groups.mutate((val) => {
      const index = val.findIndex((group) => group.id === id);
      val[index] = modifiedGroup;
    });
  }
}
