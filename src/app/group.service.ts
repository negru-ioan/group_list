import { group } from '@angular/animations';
import { Injectable, signal, Signal, computed } from '@angular/core';
import { functions, groupList, users } from 'data/groupList';
import { Group, RetardedGroup } from 'types';

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
  selected = signal<RetardedGroup>(this.initSelected(0));

  initSelected(i: number) {
    return {
      ...this.groups()[i],
      functions: functions.map((func) => {
        const exFunc = this.groups()[2].functions.find(
          (funct) => funct.functionCode === func.function_code
        );
        return {
          title: func.function_name,
          functionCode: func.function_code,
          minValue: exFunc?.minValue || '',
          maxValue: exFunc?.maxValue || '',
          checked: !!exFunc,
        };
      }),
      users: users.map((user) => {
        const exUser = this.groups()[i].users.find(
          (usr) => usr.userId === user.userId
        );
        return {
          userId: user?.userId || '',
          userInitials:
            exUser?.userInitials ||
            user?.fullName?.match(/\b\w/g)?.join('') ||
            '',
          fullName: user.fullName,
          checked: !!exUser,
        };
      }),
    };
  }

  constructor() {
    this.initSelected(0);
  }

  setSelected(id: number): void {
    const index = this.groups().findIndex((item) => item.id === id);
    this.selected.set(this.initSelected(index));
    console.log(this.selected(), 345678);
  }

  setSelectedInGroups() {
    let selected = { ...this.selected() };
    const index = this.groups().findIndex((val) => val.id === selected.id);
    this.groups.mutate((val) => {
      const functions = selected.functions.filter((func) => func.checked);
      const users = selected.users.filter((user) => user.checked);
      val[index] = {
        ...selected,
        functions,
        users,
      };
    });
  }

  deleteGroup(id: number): void {
    const i = this.groups().findIndex((group) => group.id === id);
    if (i !== -1) {
      this.groups.mutate((val) => val.splice(i, 1));
    }
  }
}
