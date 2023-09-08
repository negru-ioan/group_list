import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css'],
})
export class InitialsComponent {
  @Input() initials!: string;
  @Input() type = 'v1';

  getInitials(fullName: string): string {
    return fullName?.match(/[A-Z]/g)?.join('') ?? '';
  }
}
