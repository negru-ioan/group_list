import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @Input() title!: string
  @Input() functionCode!: string
  @Input() minValue!: string
  @Input() maxValue!: string
  editable = true

  get imageUrl(){
    return this.editable ? "/assets/credit_card.png" :"https://cdn-icons-png.flaticon.com/512/657/657076.png"
  }
}
