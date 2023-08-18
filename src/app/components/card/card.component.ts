import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Group } from 'types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
  @Input() group!: Group;
  length = 0;
  popupVisible = false;
  users: any[] = [];
  services: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['group'] && changes['group'].currentValue) {
      this.length = this.group.functions.length;
      this.users = this.group.users
      this.services =
        this.length > 4
          ? this.group.functions.sort((a, b) => parseInt(a.maxValue) - parseInt(b.maxValue)).slice(0, 4).concat({
              title: `+${this.length - 4} Servizi`,
              functionCode: '',
              minValue: '',
              maxValue: '',
            })
          : this.group.functions;
    }
  }

  showPopup() {
    this.popupVisible = true;
  }

  hidePopup() {
    this.popupVisible = false;
  }
}


// export class CardComponent {
//   @Input() group!: Group
//   popupVisible = false;
//   lenght = this.group.functions.length
//   users = this.group.users.slice(0, 4);
//   services =
//     this.lenght > 4
//       ? this.group.functions
//           .slice(0, 4)
//           .concat({
//             title: `+${this.lenght - 4} Servizi`,
//             functionCode: '',
//             minValue: '',
//             maxValue: '',
//           })
//       : this.group.functions;

//   showPopup() {
//     this.popupVisible = true;
//   }

//   hidePopup() {
//     this.popupVisible = false;
//   }
//    f(){
//     console.log( this.group)
//   }
// }