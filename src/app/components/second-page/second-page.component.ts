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
  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groups = this.groupService.groups();
    // log(this.selected.users, users, this.groupService.selected().users, 13425);
    log(this.selected);
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

  save() {
    // this.groupService.setSelectedInGroups(this.selected);
  }

  toggleUser(i: number) {
    this.selected.users[i].checked = !this.selected.users[i].checked;
  }
}
