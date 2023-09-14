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
  // users = [...users];
  groups: Group[] = [];
  selected: RetardedGroup = {
    // group (global)
    ...this.groupService.selected,
    functions: functions.map((func) => {
      const exFunc = this.groupService.selected.functions.find(
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
      const exUser = this.groupService.selected.users.find(
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
  inModifyPage = window.location.href.includes('modifica');
  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groups = this.groupService.groups();
    log(this.selected.users, users, this.groupService.selected.users, 13425);
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
      exFunc.minValue = '1';
      exFunc.maxValue = '9999';
    } else {
      exFunc.minValue = '';
      exFunc.maxValue = '';
    }
  }

  toggleUser(i: number) {
    this.selected.users[i].checked = !this.selected.users[i].checked;
  }

  save() {
    this.groupService.setSelectedInGroups(this.selected);
  }
}
