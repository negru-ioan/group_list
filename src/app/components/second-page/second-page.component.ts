import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { Group, RetardedGroup } from 'types';
import { functions, users } from 'data/groupList';

const log = (...args: any[]) => {
  let res: any = [];
  args.forEach((arg) => res.push(arg, '\n'));
  console.log(...res);
};

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent implements OnInit {
  groups: Group[] = [];
  selected = this.groupService.selected();
  inModifyPage = window.location.href.includes('modifica');
  users = [...this.selected.users];
  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    const id = window.location.href.slice(22).match(/\d+/)?.[0] || 0;
    this.groups = this.groupService.groups();
    log(
      id,
      this.selected.id,
      this.groupService.selected().id,
      'ngOnInit second'
    );
  }

  changeFuncVal(e: Event, funCode: string, key: 'minValue' | 'maxValue') {
    const val = (<HTMLInputElement>e.target).value;
    if (isNaN(Number(val))) {
      (<HTMLInputElement>e.target).value = '';
      alert('Lo stipendio deve essere un numero, asino');
      return;
    }
    let existingFunc = this.selected.functions.find(
      (fn) => fn.functionCode === funCode
    );
    if (existingFunc) {
      existingFunc[key] = val;
      existingFunc.checked =
        !!val && !!(existingFunc.minValue && existingFunc.maxValue);
    }
    log(this.selected.functions);
  }

  toggleFunc(funCode: string) {
    let exFunc: any = this.selected.functions.find(
      (fun) => fun.functionCode === funCode
    );
    exFunc.checked = !exFunc.checked;
    if (exFunc.checked) {
      exFunc.minValue = this.selected.minValue;
      exFunc.maxValue = this.selected.maxValue;
    } else {
      exFunc.minValue = '';
      exFunc.maxValue = '';
    }
  }

  filterUsers(e: Event) {
    const val = (<HTMLInputElement>e.target).value;
    if (val) {
      this.users = this.selected.users.filter((user) =>
        user.fullName.match(new RegExp(val, 'gi'))
      );
    } else {
      this.users = [...this.selected.users];
    }
  }

  // toggleUser(id: string) {
  //   const user = this.selected.users.find((u) => u.userId === id);
  //   const usr = this.users.find((u) => u.userId === id);
  //   const userFromUsers = users.find((u) => u.userId === id);
  //   if (user) {
  //     user.checked = !user.checked;
  //   } else {
  //     const newUser = {
  //       fullName: userFromUsers?.fullName || '',
  //       userId: userFromUsers?.userId || '',
  //       userInitials: userFromUsers?.fullName?.match(/\b\w/g)?.join('') || '',
  //       checked: true,
  //     };
  //     this.selected.users.push(newUser);
  //     this.users.push(newUser);
  //   }
  //   if (usr) usr.checked = !usr.checked;

  //   log(this.selected.users);
  // }
  toggleUser(id: string) {
    const user = this.selected.users.find((u) => u.userId === id);
    const userFromUsers = users.find((u) => u.userId === id);

    if (user) {
      user.checked = !user.checked;
    } else if (userFromUsers) {
      const newUser = {
        fullName: userFromUsers.fullName || '',
        userId: userFromUsers.userId || '',
        userInitials:
          (userFromUsers.fullName || '').match(/\b\w/g)?.join('') || '',
        checked: true,
      };

      this.selected.users.push(newUser);
      this.users.push(newUser);
    }

    log(this.selected.users);
  }
}
